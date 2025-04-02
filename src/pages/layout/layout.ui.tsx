import { Outlet } from "react-router";

import { AppSidebar } from "@/widgets/app-sidebar.ui";

export function Layout() {
  return (
    <div className="w-full h-full">
      <AppSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
