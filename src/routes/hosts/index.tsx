import { rawHostsService } from "@/features/hosts/query";

import { useQuery } from "@tanstack/react-query";

export function Hosts() {
  const { data: rawHosts } = useQuery(rawHostsService.queryOptions());

  return (
    <div>
      rawHosts
      <pre>
        <code>{rawHosts}</code>
      </pre>
    </div>
  );
}
