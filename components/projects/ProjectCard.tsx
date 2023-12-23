import React from 'react'
import ClientImage from '../ClientImage'

type Props = {
    src: string
    title: string
    description: string
}

export default function ProjectCard(props: Props) {
    const { src, title, description } = props

    return (
        <div className='relative col-span-12 sm:col-span-6 md:col-span-4 overflow-hidden rounded-lg shadow-lg border border-shadow'>
            <ClientImage
                src={src}
                alt={title}
                width={1000}
                height={1000} 
                className='w-full object-contain'
            />

            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>
                    {title}
                </h1>
                <p className='mt-2 text-gray-300'>
                    {description}
                </p>
            </div>
        </div>
    )
}
