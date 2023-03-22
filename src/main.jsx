import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import Blogpost from './components/Blogpost'

import './static/css/main.css'

import Templatepage from './pages/Templatepage'


import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Blogpost /> */}
    {/* <App /> */}
    <Templatepage />
  </React.StrictMode>,
)
