import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACTIVE - Culture Collective & Psyked',
  description: 'Join for limited pre-sale tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
} 