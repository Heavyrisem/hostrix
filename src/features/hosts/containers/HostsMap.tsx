import { useSuspenseQuery } from "@tanstack/react-query";

import { hostsService } from "../query";

export function HostsMap() {
  const { data: hosts } = useSuspenseQuery(hostsService.queryOptions());

  return (
    <div>
      <pre>{JSON.stringify(hosts, null, 2)}</pre>
    </div>
  );
}
