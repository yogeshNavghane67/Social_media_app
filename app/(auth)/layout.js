import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css';
export const metadata = {
    title: 'Auth',
    description: 'Social media app',
  }
  
  const inter = Inter({ subsets: ['latin'] })

  export default function RootLayout({ children }) {
   return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>{children}</body>
      </html>
    </ClerkProvider>
      
    )
  }
  