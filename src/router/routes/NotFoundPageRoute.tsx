import { type RouteObject } from "react-router";

import { NotFoundPage } from "../../layout/pages/NotFoundPage/NotFoundPage";
import { Routes } from "../Routes";
import { MainPage } from "../../layout/pages/MainPage/MainPage";

export const NotFoundPageRoute: RouteObject = {
  path: Routes.NotFoundPath,
  element: (
    <MainPage>
      <NotFoundPage />,
    </MainPage>
  ),
};
