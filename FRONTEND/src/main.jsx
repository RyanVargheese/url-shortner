import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {createRouter,RouterProvider} from "@tanstack/react-router"
import rootRoute from './routing/routeTree.js'
import store from './store/store.js'
import {Provider} from 'react-redux'

const queryClient=new QueryClient();
const router=createRouter({routeTree:rootRoute,context:{queryClient,store}});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </Provider>
)
