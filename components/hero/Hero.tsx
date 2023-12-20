import React from 'react'
import HeroContent from './HeroContent'
import { Locale } from '@/config/i18n.config'

type Props = {
  lang: Locale
  data: HeroJsonData
}

export default async function Hero(props: Props) {
  const { lang, data } = props 

  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-18 absolute top-[-340px] left-0 z-1 h-full w-full object-cover'
        >
            <source 
              src={data.videoSrc}
              type='video/webm' 
            />
        </video>
        <HeroContent 
          data={data}
          lang={lang}
        />
    </div>
  )
}
