import { cn } from "@/shared/cn";

import { HostRecord } from "@shared/types/hosts";

type HostCardProps = HostRecord;

export function HostCard({ ip, domain, disabled }: HostCardProps) {
  // const

  return (
    <div
      className={cn(
        "flex gap-2",
        "bg-white rounded-xl p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.7)] transition-shadow duration-300 border border-gray-100",
      )}
    >
      <span>{ip}</span>
      <span>{domain}</span>
      <input type="checkbox" checked={!disabled} onChange={() => {}} />
    </div>
  );
}
