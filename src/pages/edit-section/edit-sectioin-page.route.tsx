import { RouteObject } from "react-router";

import { EditSectionPage } from "./edit-section-page.ui";

export const editSectionPageRoute: RouteObject = {
  // 경로 edit-section/:id 로 바꿔야 함
  path: "*",
  element: <EditSectionPage />,
};
