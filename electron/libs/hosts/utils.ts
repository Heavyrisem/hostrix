import { isIP } from "net";

import { HostRecord } from "@shared/types/hosts";

function isDomain(domain: string): boolean {
  if (domain === "localhost") return true;

  const parts = domain.split(".");
  if (parts.length < 2) return false;

  for (const part of parts) {
    if (!part.match(/^[a-z0-9]+$/i)) return false;
  }

  return true;
}

export function parseHosts(sectionContent: string): HostRecord[] {
  const lines = sectionContent.split("\n");
  let hosts: HostRecord[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === "") continue;

    const isCommented = trimmedLine.startsWith("#");
    const unCommentedLine = trimmedLine.replace(/^#/, "").trim();
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

  return hosts;
}

export function formatSectionContent(sectionContent: string): string {
  const hosts = parseHosts(sectionContent);
  const formattedContent = hosts
    .map((host) => `${host.disabled ? "# " : ""}${host.ip}\t${host.domain}`)
    .join("\n");
  return formattedContent;
}
