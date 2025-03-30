interface Host {
  ip: string;
  names: string[];
}

export function parseHosts(content: string): Host[] {
  const lines = content.split("\n");
  const hosts: Host[] = [];

  for (const line of lines) {
    const commentIndex = line.indexOf("#");
    const effectiveLine = commentIndex >= 0 ? line.substring(0, commentIndex) : line;

    const trimmedLine = effectiveLine.trim();
    if (trimmedLine === "") continue;

    const [ip, ...names] = trimmedLine.split(/\s+/);
    if (!ip || !names.length) continue;

    hosts.push({ ip, names });
  }

  return hosts;
}
