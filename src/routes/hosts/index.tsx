import { HostsMap } from "@/features/hosts/containers/HostsMap";
import { rawHostsService } from "@/features/hosts/query";

import { useSuspenseQuery } from "@tanstack/react-query";

export function Hosts() {
  const { data: rawHosts } = useSuspenseQuery(rawHostsService.queryOptions());

  console.log(rawHosts);

  return (
    <div className="h-full w-full">
      <HostsMap />
      <pre>{rawHosts}</pre>
    </div>
  );
}
