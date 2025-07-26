import RouteLayout from "../App.jsx";
import {createRootRoute} from '@tanstack/react-router'
import { homePageRoute } from "./homepage.js";
import { dashBoardRoute } from "./dashboard";
import { authRoute } from "./auth.route";


const rootRoute=createRootRoute({
    component:RouteLayout
})

rootRoute.addChildren([
    homePageRoute,
    dashBoardRoute,
    authRoute
]);

export default rootRoute;