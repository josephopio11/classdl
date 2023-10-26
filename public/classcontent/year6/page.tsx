import LinkCard from '@/components/LinkCard'
import { classLinks } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="max-w-screen-xl pt-20 mx-auto">
      <div className='grid grid-cols-3 gap-4  items-center justify-between mx-auto p-4'>
        {
          classLinks.map((link) => (
            <LinkCard
              key={link.title}
              title={link.title}
              link={link.link}
              image={link.image}
            />
          ))
        }
      </div>
    </section >
  )
}
