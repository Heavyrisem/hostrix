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

export function parseHosts(content: string): HostRecord[] {
  const lines = content.split("\n");
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

  return hosts;
}
