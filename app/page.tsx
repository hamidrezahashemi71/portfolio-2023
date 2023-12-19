import Hero from '@/components/hero/Hero'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        <ThemeToggle />
        <Hero />
      </div>
    </main>
  )
}
