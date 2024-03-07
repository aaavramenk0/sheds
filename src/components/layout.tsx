import Footer from './footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

//                                   children             data type
export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}