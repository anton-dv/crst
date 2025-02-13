import { type RouteObject } from "react-router";

import { Routes } from "../Routes";
import { AreasPage } from "../../layout/pages/AreasPage/AreasPage";
import { MainPage } from "../../layout/pages/MainPage/MainPage";

export const AreasPageRoute: RouteObject = {
  path: Routes.AreasPath,
  element: (
    <MainPage>
      <AreasPage />,
    </MainPage>
  ),
};
