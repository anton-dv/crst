import { Navigate, type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { MainPage } from "../../layout/pages/MainPage/MainPage";

export const AnyRoute: RouteObject = {
  path: Routes.AnyPath,
  element: (
    <MainPage>
      <Navigate to={Routes.NotFoundPath} replace />
    </MainPage>
  ),
};
