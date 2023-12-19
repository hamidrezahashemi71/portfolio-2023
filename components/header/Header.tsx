import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import React from 'react'
import ClientImage from '../ClientImage'

export default async function Header(props: LanguageProp) {
  const { params: { lang } } = props
  const { header, skills, socials } = await getDictionary(lang)

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-shadow/50 bg-headerBg backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <Link href={"#about-me"} className='h-auto w-auto flex flex-row items-center gap-3'>
                <ClientImage
                    src={header.logoLink}
                    alt='logo'
                    width={150}
                    height={70}
                    className='cursor-pointer hover:animate-slowspin'
                />
            </Link>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-border2 bg-bg2 mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    {header.navLinks.map((navLink) => (
                        <Link 
                            href={navLink.src} 
                            className='cursor-pointer'
                            key={navLink.src}
                        >
                            { navLink.title }
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                {socials.map((social) => (
                    <ClientImage
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={24}
                        height={24}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
