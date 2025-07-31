import {createRoute} from '@tanstack/react-router'
import  rootRoute  from './routeTree.js';
import HomePage from '../pages/HomePage';

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute, // Defines this route as a child of 'rootRoute'
  path: '/', //when user goes to this route ,this components would get rendered
  component: HomePage,
  
});