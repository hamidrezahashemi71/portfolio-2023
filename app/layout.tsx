import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamidreza Hashemi Portfolio',
  description: 'I am a web developer and this is my portfolio',
}

export default function RootLayout(props: Children) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-bgDark  overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
