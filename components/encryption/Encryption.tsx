'use client'

import { Locale } from '@/config/i18n.config'
import { slideInFromTop } from '@/utils/motionUtils'
import { motion } from 'framer-motion'
import React from 'react'
import ClientImage from '../ClientImage'

type Props = {
    lang: Locale
    data: EncryptionJsonData
}

export default function Encryption(props: Props) {
    const { data } = props 

    return (
        <div className='flex flex-row relative items-center justify-center w-full min-h-screen h-full'>
            <div className='absolute w-auto h-auto top-11 z-[5]'>
                <motion.div
                    variants={slideInFromTop(0.5)}
                    className='text-[40px] font-medium text-center text-gray-200'
                >
                    {data.text1} 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                        {" "}
                        &
                        {" "}
                    </span>
                    {data.text2} 
                </motion.div>
            </div>

            <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
                <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                    <ClientImage
                        src={data.image.src1}
                        alt={data.image.alt1}
                        width={data.image.width1}
                        height={data.image.height1}
                        className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                    />
                    <ClientImage
                        src={data.image.src2}
                        alt={data.image.alt2}
                        width={data.image.width2}
                        height={data.image.height2}
                        className='z-10'
                    />
                </div>
                
                <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-border opacity-[0.9]'>
                    <h1 className='Welcome-text text-[12px]'>
                        {data.title}
                    </h1>
                </div>
            </div>

            <div className='absolute z-20 bottom-11 p-[5px]'>
                <div className='text-[15px] italic font-medium text-center text-gray-300'>
                    {data.text3}
                </div>
            </div>

            <div className='w-full flex items-start justify-center absolute'>
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='false'
                    className='w-full h-auto'
                    src={data.videoSrc}
                />
            </div>
        </div>
    )
}
