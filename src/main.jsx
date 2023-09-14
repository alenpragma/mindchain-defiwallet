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
import { ToastContainer } from 'react-toastify';
import AirDrop from './pages/AirDrop';

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
      {
        path: "airdrop",
        element: <AirDrop />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer
        position="bottom-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </React.StrictMode>,
)
