export const metadata = {
  title: 'Daniel Mustard',
  description: '',
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
