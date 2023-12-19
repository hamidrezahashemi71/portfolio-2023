import React from 'react'
import HeroContent from './HeroContent'

export default async function Hero(props: any) {
  const { lang, data } = props 

  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-18 absolute top-[-340px] left-0 z-1 h-full w-full object-cover'
        >
            <source src='https://res.cloudinary.com/didiogeua/video/upload/v1702973524/portfolio/scsxgr7hvatyftnkeqbg.webm' type='video/webm' />
        </video>
        <HeroContent 
          data={data}
          lang={lang}
        />
    </div>
  )
}
