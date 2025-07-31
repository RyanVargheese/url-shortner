import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {createRouter,RouterProvider} from "@tanstack/react-router"
import rootRoute from './routing/routeTree.js'
import store from './store/store.js'
import {Provider} from 'react-redux'

export const queryClient=new QueryClient();
// creating a new router instance and passing it to Router Provider
const router=createRouter({routeTree:rootRoute,context:{queryClient,store}});

createRoot(document.getElementById('root')).render(
    //Making the Redux store(global state manegement),query client(smart data fetching and caching),router(client side navigation) accessible to all components
    <Provider store={store}>

    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router}/>

    </QueryClientProvider>
    </Provider>
)
