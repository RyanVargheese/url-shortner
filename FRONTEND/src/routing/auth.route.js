import {createRoute} from '@tanstack/react-router'
import  rootRoute  from './routeTree.js';
import AuthPage from '../pages/AuthPage';

export const authRoute = createRoute({
  getParentRoute: () => rootRoute, // Defines this route as a child of 'rootRoute'
  path: '/auth', // The path for this route (relative to its parent)
  component: AuthPage
  // ... (rest of the route definition is cut off)
});