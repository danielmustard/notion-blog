import { Route, Routes } from "react-router-dom"

import Blogpost from "./components/Blogpost"
import Navbar from "./components/Navbar"
import About from "./pages/About"


function AppRoutes() {
  

  return (
    <Routes>
      {/* Route for home page */}
      <Route path="/" element={<><Navbar/><Blogpost/></>} />

      {/* Route for About Page */}
      <Route path="/about" element={<><Navbar/><About/></>} />

      {/* Route for blog page */}

      <Route path="/blog" element={<><Navbar/><Blogpost/></>} />
      

    </Routes>
  )
}

export default AppRoutes
