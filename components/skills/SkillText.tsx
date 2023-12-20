'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motionUtils'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { Locale } from '@/config/i18n.config'

type Props = {
    lang: Locale
    data: SkillJsonData
}

export default function SkillText(props: Props) {
    const { lang, data } = props 

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop(0.5)}
                className='Welcome-box py-[8px] px-[7px] border border-border opacity-[0.9]'
            >
                <SparklesIcon className={`text-icon ${lang === 'en' ? 'mr-[10px]' : 'ml-[10px]'} h-5 w-5`}/>
                <h1 className='Welcome-text text-[13px]'>
                    {data.text1}
                </h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[40px] text-white font-medium mt-[20px] mb-[15px] text-center'
            >
                {data.text2}
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='italic text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                {data.text3}
            </motion.div>
        </div>
    )
}
