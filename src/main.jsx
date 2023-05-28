import React from 'react'
import ReactDOM from 'react-dom/client'
// const Swal = require('sweetalert2')
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Router/Router';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-lg mx-auto '>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
)
