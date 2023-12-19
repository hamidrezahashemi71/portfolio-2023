'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motionUtils'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import cloudinaryLoader from '@/cloudinaryLoader'

export default function HeroContent(props: any) {
    const { lang, data } = props 
 
    return ( 
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-20'
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop(0.5)}
                    className='Welcome-box py-[8px] px-[7px] border border-border opacity-[0.9]'
                >
                    <SparklesIcon className={`text-icon ${lang === 'en' ? 'mr-[10px]' : 'ml-[10px]'} h-5 w-5`}/>
                    <h1 className='Welcome-text text-[13px]'>
                        {data.jobTitle}
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-[75px]'
                >
                    <span>
                        {data.motto[0]} 
                        <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {data.motto[1]} 
                        </span>
                        <br />
                        {data.motto[2]} 
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    {data.intro}
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                   {data.button}
                </motion.a>

            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src={'/v1702973529/portfolio/g4ajbfexdcvsbwasepj6.svg'}
                    alt='work icons'
                    height={650}
                    width={650}
                    loader={cloudinaryLoader}
                />
            </motion.div>
        </motion.div>
    )
}
