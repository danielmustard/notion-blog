export const metadata = {
  title: 'Daniel Mustard',
  description: '',
}

import Navbar from "@/components/Navbar"
import '../styles/main.css'
export default function RootLayout({ children }) {
 return (
  <>
  <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
  </html>
  </>
  )
}
