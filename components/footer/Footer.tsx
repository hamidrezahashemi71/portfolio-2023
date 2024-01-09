import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import React from 'react'
import ClientImage from '../ClientImage'

export default async function Footer(props: LanguageProp) {
  const { params: { lang } } = props
  const { footer, socials } = await getDictionary(lang)
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
          <div className='min-w-[200px] h-auto items-center justify-start'>
            <div className='font-bold text-[16px] text-center'>
              {footer.title}
            </div>
            <div className='flex items-center gap-3'>
              {socials.map((social) => (
                <Link href={social.href} key={social.name} target="_blank" className='flex flex-row items-center my-[15px] cursor-pointer'>
                  <ClientImage
                    src={social.src}
                    alt={social.name}
                    width={24}
                    className='flex flex-row items-center my-[15px] cursor-pointer'
                    height={24}
                  />
                  <span className='text-[15px] mx-[6px]'>
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
