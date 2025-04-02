import { sectionListService } from "@/entities/section/section.query";

import { useSuspenseQuery } from "@tanstack/react-query";

export function AppSidebar() {
  const { data: sections } = useSuspenseQuery(sectionListService.queryOptions());

  return (
    <div>
      {sections.map((section) => (
        <div className="m-2 p-2 bg-blue-400" key={section}>
          {section}
        </div>
      ))}
    </div>
  );
}
