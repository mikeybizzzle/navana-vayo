import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vayo Vault: Members-Only Travel Deals',
  description: 'Vacation deals. Unlocked. Experience the members-only travel platform that delivers private wholesale pricing and saves you about 50% on average.',
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