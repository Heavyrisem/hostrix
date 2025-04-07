import { useSuspenseQuery } from "@tanstack/react-query";

import { hostsService } from "../query";

// raw section 가져오기

export function HostsMap() {
  const { data: hosts } = useSuspenseQuery(hostsService.queryOptions());

  return (
    <div className="p-4">
      <pre>{JSON.stringify(hosts, null, 2)}</pre>
    </div>
  );
}
