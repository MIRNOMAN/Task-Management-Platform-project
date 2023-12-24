import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
    </DndProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
