import { Host, HostRecord } from "@shared/types/hosts";

function isIPv4(ip: string): boolean {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;

  for (const part of parts) {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255) return false;
  }

  return true;
}

function isIPv6(ip: string): boolean {
  const parts = ip.split(":");
  if (parts.length < 3 || parts.length > 8) return false;

  for (const part of parts) {
    const num = parseInt(part, 16);
    if (isNaN(num) || num < 0 || num > 65535) return false;
  }

  return true;
}

function isIP(ip: string): boolean {
  return isIPv4(ip) || isIPv6(ip);
}

export function parseHosts(content: string, options?: { includeDisbled?: boolean }): HostRecord[] {
  const lines = content.split("\n");
  const hosts: HostRecord[] = [];

  for (const line of lines) {
    const commentIndex = line.indexOf("#");
    const effectiveLine = commentIndex >= 0 ? line.substring(0, commentIndex) : line;

    const trimmedLine = effectiveLine.trim();
    if (trimmedLine === "") continue;

    const [ip, ...domains] = trimmedLine.split(/\s+/);
    if (!ip || !domains.length) continue;

    const records = domains.reduce((acc, domain) => {
      if (!isIP(domain)) return acc;
      return [...acc, { ip, domain: domain, disabled: false }];
    }, [] as HostRecord[]);

    hosts.push(...records);
  }

  return hosts;
}
