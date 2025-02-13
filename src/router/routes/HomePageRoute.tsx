import { type RouteObject } from "react-router";

import { Routes } from "../Routes";
import { HomePage } from "../../layout/pages/HomePage/HomePage";
import { MainPage } from "../../layout/pages/MainPage/MainPage";

export const HomePageRoute: RouteObject = {
  path: Routes.HomePath,
  element: (
    <MainPage>
      <HomePage />,
    </MainPage>
  ),
};
