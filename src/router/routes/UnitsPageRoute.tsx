import { type RouteObject } from "react-router";

import { Routes } from "../Routes";
import { UnitsPage } from "../../layout/pages/UnitsPage/UnitsPage";
import { MainPage } from "../../layout/pages/MainPage/MainPage";

export const UnitsPageRoute: RouteObject = {
  path: Routes.UnitsPath + "/:id",
  element: (
    <MainPage>
      <UnitsPage />,
    </MainPage>
  ),
};
