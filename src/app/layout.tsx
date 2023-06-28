import { Footer } from './components'
import { GithubProfileProvider } from './context/GithubProfileProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Github cards',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <GithubProfileProvider>
        <body className={`${inter.className} flex flex-col items-center`}>
          {children}
          <Footer />
        </body>
      </GithubProfileProvider>
    </html>
  )
}
