import { RouterProvider as ReactRouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

import { routeMaps } from "@/routes/routeMaps";

export function RoutesProvider() {
  return <ReactRouterProvider router={createBrowserRouter(routeMaps)} />;
}
