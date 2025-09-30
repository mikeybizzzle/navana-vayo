import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navan: The #1 Corporate Travel Management Platform',
  description: 'Business travel & expense management. Solved. Experience the all-in-one travel and expense platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}