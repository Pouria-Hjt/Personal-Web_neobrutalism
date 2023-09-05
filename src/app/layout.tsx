import './globals.css'
import type { Metadata } from 'next'

import localFont from "next/font/local";

const Vazir = localFont({
  src: [
    {
      path: "../assets/font/Vazir.woff2",
      weight: "normal",
    },
    {
      path: "../assets/font/Vazir-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/font/Vazir-Medium.woff2",
      weight: "500",
    },
  ],
});

// this part will be important for SEO
export const metadata: Metadata = {
  title: "Personal Web", // your website name will be here
  description: "this is my personal website", // your website description will be here
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="fa">
      <body className={Vazir.className} dir='rtl'>{children}</body>
    </html>
  )
}
