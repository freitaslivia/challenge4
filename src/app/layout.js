import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto Seguro ',
  description: '1TDSPM - Entrega Challenge 4 Sprint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
       <Cabecalho/>
        {children}</body>
    </html>
  )
}
