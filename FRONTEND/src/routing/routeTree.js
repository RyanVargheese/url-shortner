import RouteLayout from "../App.jsx";
import {createRootRoute} from '@tanstack/react-router'
import { homePageRoute } from "./homepage.js";
import { dashBoardRoute } from "./dashboard";
import { authRoute } from "./auth.route";


// he root route is the top-level routing container—all your other routes
const rootRoute=createRootRoute({
    component:RouteLayout //tells the base layout for every single page in the layout
})

//this root route childern to be added as wekk
rootRoute.addChildren([
    homePageRoute,
    dashBoardRoute,
    authRoute
]);

export default rootRoute;