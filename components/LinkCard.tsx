import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type LinkCardProps = {
  title: string
  link: string
  image?: string
}

const LinkCard = ({ title, link, image }: LinkCardProps) => {
  return (
    <>
      <Link href={`/atukot/${link}`} className="border flex flex-row gap-4 border-green-500 p-4 rounded-lg shadow-lg shadow-blue-900 hover:bg-gray-300 hover:-translate-y-1 active:translate-y-1 active:shadow-none active:scale-[99%] transition-all">
        <Image src={`/cllogo/${image}`} className="object-cover rounded-full w-12 h-12 shadow-lg shadow-blue-600 border border-white" alt="Flowbite Logo" width={48} height={48} quality={100} />
        <div>
          <h2 className='font-bold text-3xl'>{title}</h2>
          <p>Class files for the 2023 Class!</p>
        </div>
      </Link>
    </>
  )
}

export default LinkCard