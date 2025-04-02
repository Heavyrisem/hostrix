import { RouterProvider as ReactRouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

import { editSectionPageRoute } from "@/pages/edit-section/edit-sectioin-page.route";
import { Layout } from "@/pages/layout/layout.ui";

const routes = createBrowserRouter([{ element: <Layout />, children: [editSectionPageRoute] }]);

export function RouteProvider() {
  return <ReactRouterProvider router={routes} />;
}
