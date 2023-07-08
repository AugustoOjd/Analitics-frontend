'use client'

import FooterContainer from "@/components/footer/FooterContainer";
import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import { store } from '../store/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Book Analitics',
  description: 'Book Analitic App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
      >
        <Provider store={store}>
          
          <Providers>
            {children}
            <FooterContainer/>
          </Providers>
          
        </Provider>
      </body>
    </html>
  )
}
