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
import Documents from './components/Documents';
import EliteClub from './pages/EliteClub';
import ProjectManager from './pages/ProjectManager';
import Consutant from './components/Consutant';

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
      {
        path: "ambassador",
        element: <Documents />
      },
      {
        path: "eliteclub",
        element: <EliteClub />
      },
      {
        path: "projectmanager",
        element: <ProjectManager />
      },{
        path:"consultant",
        element:<Consutant/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-lightBlue">

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
    </div>
  </React.StrictMode>,
)
