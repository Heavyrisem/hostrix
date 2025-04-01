import { v4 as uuidv4 } from "uuid";

import { useSuspenseQuery } from "@tanstack/react-query";

import { HostCard } from "../components/HostCard";
import { hostsService } from "../query";

export function HostsMap() {
  const { data: hosts } = useSuspenseQuery(hostsService.queryOptions());

  return (
    <div className="p-4">
      {hosts.map((host) => (
        <HostCard {...host} key={uuidv4()} />
      ))}
    </div>
  );
}
