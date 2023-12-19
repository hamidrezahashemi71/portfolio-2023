import React from 'react'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-18 absolute top-[-340px] left-0 z-1 h-full w-full object-cover'
        >
            <source src='/images/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent />
    </div>
  )
}
