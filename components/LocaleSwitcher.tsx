'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/config/i18n.config'
import { useEffect, useState } from 'react'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
    <ul className="font-medium flex items-center gap-2">
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className=' flex items-center bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70'
            >
              <div className="inline-flex items-center">
                {locale === 'fa' ?
                  <p className='text-transparent font-bold bg-clip-text bg-gradient-to-l from-purple-500 to-cyan-500 font-exo2'>FA</p>
                :
                  <p className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-exo2'>EN</p>
                }
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
 