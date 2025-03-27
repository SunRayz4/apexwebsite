import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/global.css";  // Ensure global styles are available


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apex Internation School",
  description: "A premier educational institution dedicated to academic excellence and holistic development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'