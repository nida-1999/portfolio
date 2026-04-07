import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nida Tarannum — Frontend Engineer',
  description: 'Frontend Engineer with 4+ years building high-performance web applications. React, TypeScript, Next.js specialist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
