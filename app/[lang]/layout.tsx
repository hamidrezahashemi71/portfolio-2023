import type { Metadata } from 'next'
import '../globals.css'
import { roboto, sans } from '@/lib/fonts'
import { Locale, i18n } from '@/config/i18n.config'
import StarsCanvas from '@/components/hero/StarBackground'

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang: Locale }
}

export const metadata: Metadata = {
  title: 'Hamidreza Hashemi Portfolio',
  description: 'I am a web developer and this is my portfolio',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}


export default function RootLayout(props: RootLayoutProps) {
  const { params, children } = props

  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`
        ${params.lang === 'fa' ? sans.variable : roboto.variable}
        ${params.lang === 'fa' ? 'font-sans' : 'font-exo2'}
        bg-bgDark  overflow-y-scroll overflow-x-hidden
      `}
      > 
        <StarsCanvas />
        {children}
      </body>
    </html>
  )
}
