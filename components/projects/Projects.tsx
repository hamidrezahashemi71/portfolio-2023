import { Locale } from '@/config/i18n.config'
import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {
  lang: Locale
  data: ProjectsJsonData
}

export default function Projects(props: Props) {
  const { lang, data } = props

  return (
    <div
      className='flex flex-col items-center justify-between py-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        {data.title}
      </h1>
      <div className='h-full w-full grid grid-cols-12 gap-10 px-10'>
        {data.projectCardsProps.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
} 
