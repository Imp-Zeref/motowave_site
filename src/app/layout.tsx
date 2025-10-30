import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://www.motowave.com.br'

export const metadata: Metadata = {
  title: 'MotoWave | App de Manutenção de Motos',
  description: 'Acompanhe a manutenção da sua motocicleta, previna problemas e economize. O app definitivo para motociclistas.',
  
  metadataBase: new URL(siteUrl),

  keywords: [
    'manutenção de moto',
    'app de motocicleta',
    'MotoWave',
    'controle de manutenção',
    'histórico de manutenção',
    'lembrete troca de óleo',
  ],

  authors: [{ name: 'MotoWave', url: siteUrl }],

  openGraph: {
    title: 'MotoWave | Sua Moto Sempre Saudável',
    description: 'Acompanhe a manutenção da sua motocicleta, previna problemas e economize.',
    url: siteUrl,
    siteName: 'MotoWave',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // 2. CRIE ESSA IMAGEM (1200x630px)
        width: 1200,
        height: 630,
        alt: 'MotoWave - App de Manutenção de Motos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MotoWave | Sua Moto Sempre Saudável',
    description: 'Acompanhe a manutenção da sua motocicleta, previna problemas e economize.',
    images: [`${siteUrl}/og-image.png`],
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-icon overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}