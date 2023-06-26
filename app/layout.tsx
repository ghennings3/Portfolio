import { Inter, IBM_Plex_Mono, Saira } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form/contact-form'
import { Footer } from './components/footer/footer'
import { Toaster } from './components/toaster/toaster'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | GH Dev'
  },
  icons: [
    {
      url: '/favicon.svg'
    }
  ]
}



const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
