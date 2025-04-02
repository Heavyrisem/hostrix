import { isIP } from "net";

import { HostRecord } from "@shared/types/hosts";

import { HOSTRIX_SECTION_REGEX } from "./constants";

function isDomain(domain: string): boolean {
  if (domain === "localhost") return true;

  const parts = domain.split(".");
  if (parts.length < 2) return false;

  for (const part of parts) {
    if (!part.match(/^[a-z0-9]+$/i)) return false;
  }

  return true;
}

export function getSections(content: string): string[] {
  const sections =
    content
      .match(HOSTRIX_SECTION_REGEX)
      ?.map((match) => match.replace(HOSTRIX_SECTION_REGEX, "$1")) ?? [];

  return sections;
}

export function parseHosts(content: string): Record<string, HostRecord[]> {
  const hostrixSections = getSections(content).map((section) =>
    section.split("\n").map((line) => line.trim()),
  );

  const result: Record<string, HostRecord[]> = {};

  for (const [header, ...lines] of hostrixSections) {
    const [name] = header
      .split("|")
      .map((v) => v.trim())
      .filter(Boolean);
    if (!name) continue;
    let hosts: HostRecord[] = [];

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine === "") continue;

      const unCommentedLine = trimmedLine.replace(/^#/, "").trim();
      const isCommented = trimmedLine.startsWith("#");
      const [ip, ...domains] = unCommentedLine.split(/\s+/);
      if (!isIP(ip) || !domains.length) continue;

      const records = domains.reduce((acc, rawDomain, i, arr) => {
        const findBeforeComment = arr.findIndex((item) => item.startsWith("#"));
        const disabled = isCommented || findBeforeComment >= i;
        const domain = rawDomain.replace(/#/g, "");

        if (!isDomain(domain)) return acc;
        const record = { ip, domain, disabled };
        return [...acc, record];
      }, [] as HostRecord[]);

      hosts = hosts.concat(records);
    }

    result[name] = hosts;
  }

  return result;
}
