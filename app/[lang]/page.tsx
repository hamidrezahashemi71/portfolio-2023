import Encryption from '@/components/encryption/Encryption'
import Hero from '@/components/hero/Hero'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import metaJson from '@/dictionaries/meta.json'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { hero, encryption, projects } = await getDictionary(lang)

  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero 
          lang={lang}
          data={hero}
        />
        <Skills
          lang={lang}
        />
        <Encryption 
          lang={lang}
          data={encryption}
        />
        <Projects
          lang={lang}
          data={projects}
        />
      </div>
    </main>
  )
}
