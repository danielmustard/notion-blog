export const metadata = {
  title: 'Daniel Mustard',
  description: '',
  icons:{
    icon: '/mustard-svg.ico'
  }
}
import Head from "next/head"

import Navbar from "@/components/Navbar"
import '../styles/main.css'
export default function RootLayout({ children }) {
 return (
  <>
  <html lang="en">
    <Head>
      <title>Daniels App</title>
      <link rel="icon" href="/mustard-svg.svg" sizes="any" type="image/svg+xml"/>
    </Head>
      <body>
        <Navbar/>
        {children}
      </body>
  </html>
  </>
  )
}
