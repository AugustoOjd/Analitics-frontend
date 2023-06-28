'use client'

import FooterContainer from "@/components/footer/FooterContainer";
import { Providers } from "./providers";
import { Inter } from 'next/font/google'

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
          <Providers>
            {children}
            <FooterContainer/>
          </Providers>
      </body>
    </html>
  )
}
