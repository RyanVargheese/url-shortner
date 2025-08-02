import {createRoute} from '@tanstack/react-router'
import  rootRoute  from './routeTree.js';
import DashboardPage from '../pages/DashboardPage.jsx';
import { checkAuth } from '../util/helper.js';

export const dashBoardRoute = createRoute({
  getParentRoute: () => rootRoute, // Defines this route as a child of 'rootRoute'
  path: '/dashboard', // The path for this route (relative to its parent)
  component: DashboardPage,
  beforeLoad:checkAuth
  //this allows a function to execute before a component is rendered
});