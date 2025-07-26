import {createRoute} from '@tanstack/react-router'
import  rootRoute  from './routeTree.js';
import HomePage from '../pages/HomePage';

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute, // Defines this route as a child of 'rootRoute'
  path: '/', // The path for this route (relative to its parent)
  component: HomePage,
  
});