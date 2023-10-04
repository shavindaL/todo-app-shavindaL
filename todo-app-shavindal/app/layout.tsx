import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACMY ToDo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-inter'>{children}</body>
    </html>
  )
}
