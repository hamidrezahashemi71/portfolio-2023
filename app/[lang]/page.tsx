import Hero from '@/components/hero/Hero'
import ThemeToggle from '@/components/ThemeToggle'
import metaJson from '@/dictionaries/meta.json'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { hero } = await getDictionary(lang)

  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        <ThemeToggle />
        <Hero 
          data={hero}
          lang={lang}
        />
      </div>
    </main>
  )
}
