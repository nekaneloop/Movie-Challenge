import React from 'react'
import ReactDOM from 'react-dom/client'
// import { useRef } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

//rutas - ciertos eventos
/* const path = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:  "Detail",
    element: <div> Films details </div>,
  },
]); */ 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider path={path} />  */}
    <App />
  </React.StrictMode>,
);





