import { Poppins } from 'next/font/google'
import '../styles/global.css'
import Navbar from '@/components/shared/Navbar'
import { APP_DESCRIPTION, APP_NAME } from '@/constants'
import { Toaster } from 'react-hot-toast'
import AnimatedCursor from 'react-animated-cursor'
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
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color="248, 249, 252"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: 'text-dark-1',
            duration: 5000,
            style: {
              background: '#ffff',
            },

            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
