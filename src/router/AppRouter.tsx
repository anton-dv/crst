import { createBrowserRouter } from "react-router-dom";

import { AreasPageRoute } from "./routes/AreasPageRoute";
import { UnitsPageRoute } from "./routes/UnitsPageRoute";
import { NotFoundPageRoute } from "./routes/NotFoundPageRoute";
import { AnyRoute } from "./routes/AnyRoute";
import { HomePageRoute } from "./routes/HomePageRoute";
import { OrderPageRoute } from "./routes/OrderPageRoute";

const routes = [
    OrderPageRoute,
    HomePageRoute,
    AreasPageRoute,
    UnitsPageRoute,
    NotFoundPageRoute,
    AnyRoute,
]

export const AppRouter = createBrowserRouter(routes)