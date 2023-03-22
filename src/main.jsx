import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom"

import AppRoutes from './AppRoutes'

import Blogpost from './components/Blogpost'

import './static/css/main.css'

import Templatepage from './pages/Templatepage'


import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);
