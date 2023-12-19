'use client'

import cloudinaryLoader from '@/cloudinaryLoader'
import Image from 'next/image'
import React from 'react'

type Props = {
    src: string
    alt: string
    width: number
    height: number
    className?: string
}

export default function ClientImage(props: Props) {
    const { src, alt, width, height, className } = props
  return (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loader={cloudinaryLoader}
        className={className}
    />
  )
}
