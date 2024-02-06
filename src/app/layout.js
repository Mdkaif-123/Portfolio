import { Poppins } from 'next/font/google'
import '../styles/global.css'
import Navbar from '@/components/shared/Navbar'
import { APP_DESCRIPTION, APP_NAME } from '@/constants'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} !scroll-smooth !bg-primary !font-poppins !overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
