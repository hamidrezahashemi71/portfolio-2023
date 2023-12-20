import Encryption from '@/components/encryption/Encryption'
import Hero from '@/components/hero/Hero'
import Skills from '@/components/skills/Skills'
import ThemeToggle from '@/components/ThemeToggle'
import metaJson from '@/dictionaries/meta.json'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { hero , encryption } = await getDictionary(lang)

  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero 
          data={hero}
          lang={lang}
        />
        <Skills
          lang={lang}
        />
        <Encryption 
          lang={lang}
          data={encryption}
        />
      </div>
    </main>
  )
}
