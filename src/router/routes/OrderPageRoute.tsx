import { type RouteObject } from "react-router";

import { Routes } from "../Routes";
import { MainPage } from "../../layout/pages/MainPage/MainPage";
import { OrderPage } from "../../layout/pages/OrderPage/OrderPage";

export const OrderPageRoute: RouteObject = {
  path: Routes.OrderPath + "/:id",
  element: (
    <MainPage>
      <OrderPage />,
    </MainPage>
  ),
};
