import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'

import './globals.css'

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Alessandro Busola',
  description: 'My online resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={courier_prime.className}>
        {children}
      </body>
    </html>
  )
}
