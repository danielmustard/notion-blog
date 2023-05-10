export const metadata = {
  title: 'Daniel Mustard',
  description: 'Anything related to IT and software development, where I can easily access my notes and share them with others.',
  icons:{
    icon: 'favicon.ico'
  }
}
//import Head from "next/head"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import '../styles/main.css'
export default function RootLayout({ children }) {
 return (
  <>
  <html lang="en">

      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
  </html>
  </>
  )
}
