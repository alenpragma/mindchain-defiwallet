import React from 'react'
import ReactDOM from 'react-dom/client'

import CoinMarket from './pages/CoinMarket';
import Home from './pages/Home';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "CoinMarket",
        element: <CoinMarket />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
