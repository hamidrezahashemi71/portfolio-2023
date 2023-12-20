import React from 'react'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/config/i18n.config'
import SkillDataProvider from './SkillDataProvider'
import SkillText from './SkillText'

type Props = {
    lang: Locale
}

export default async function Skills(props: Props) {
    const { lang } = props
    const { skills } = await getDictionary(lang)
        
    return (
        <section 
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[20rem] py-20'
            id='skills'
            style={{ transform: 'scale(0.9' }}
        >
            <SkillText 
                lang={lang}
                data={skills}
            />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {skills.slillData.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        key={index}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {skills.frontendSkills.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        key={index}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {skills.backendSkills.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        key={index}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover'>
                    <video 
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='https://res.cloudinary.com/didiogeua/video/upload/v1702973526/portfolio/x4i99u2oexlpjyfeascp.webm' 
                    />
                </div>
            </div>
        </section>
    )
}
