import fs from "fs";

import { HostRecord } from "@shared/types/hosts";

import {
  HOSTRIX_SECTION_END,
  HOSTRIX_SECTION_REGEX,
  HOSTRIX_SECTION_START,
  LINUX_HOSTS_PATH,
  MACOS_HOSTS_PATH,
  WINDOWS_HOSTS_PATH,
} from "./constants";

export async function getRawHosts() {
  const platform = process.platform;
  let path;

  switch (platform) {
    case "win32":
      path = WINDOWS_HOSTS_PATH;
      break;
    case "linux":
      path = LINUX_HOSTS_PATH;
      break;
    case "darwin":
      path = MACOS_HOSTS_PATH;
      break;
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }

  try {
    const content = await fs.promises.readFile(path, "utf8");
    return content;
  } catch (error) {
    throw new Error(`Failed to read hosts file: ${(error as Error)?.message}`);
  }
}

export async function getSections(): Promise<string[]> {
  const content = await getRawHosts();
  const sections =
    content
      .match(HOSTRIX_SECTION_REGEX)
      ?.map((match) => match.replace(HOSTRIX_SECTION_REGEX, "$1")) ?? [];

  return sections;
}

export async function getSectionByName(name: string): Promise<{
  records: HostRecord[];
  rawContent: string;
}> {
  const rawHosts = await getRawHosts();
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = rawHosts.match(
    new RegExp(`${HOSTRIX_SECTION_START} \\| ${escapedName}([\\s\\S]*?)${HOSTRIX_SECTION_END}`),
  );
  if (!match || !match[1]) {
    return { records: [], rawContent: "" };
  }

  const sectionContent = match[1].trim();
  const hosts: string[] = sectionContent
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const records: HostRecord[] = [];

  for (const host of hosts) {
    let isDisabled = host.startsWith("#");
    const commentsRemoved = host.replace(/^#+/, "").trim();
    const cleanedHost = isDisabled ? commentsRemoved : host;
    if (!cleanedHost) continue;

    const [ip, ...domains] = cleanedHost.split(/\s+/);
    if (!ip) continue;

    for (const domain of domains) {
      if (!domain) continue;

      if (/^#+$/.test(domain)) {
        isDisabled = true;
        continue;
      }

      if (/^#+/.test(domain)) {
        isDisabled = true;
      }

      const cleanDomain = domain.replace(/#*/g, "");

      records.push({
        ip,
        domain: cleanDomain,
        disabled: isDisabled,
      });

      if (/#+$/.test(domain)) {
        isDisabled = true;
      }
    }
  }
  const rawContent = hosts.join("\n");

  return { records, rawContent };
}
