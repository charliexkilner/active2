import './globals.css'
import localFont from 'next/font/local'

const impact = localFont({
  src: '../public/fonts/impact.ttf',
  variable: '--font-impact',
})

export const metadata = {
  title: 'ACTIVE - Culture Collective & Psyked',
  description: 'Join for limited pre-sale tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${impact.variable}`}>
      <body>{children}</body>
    </html>
  )
} 