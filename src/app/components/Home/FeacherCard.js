import React from 'react'
import Image from 'next/image'

export default function FeacherCard({image, tittle}) {
  return (
    <div className='w-60 bg-white p-3 pb-0 rounded-lg'>
        <Image className='w-full'
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
            />
            <h4 className='p-4 text-lg font-semibold text-center'>{tittle}</h4>

    </div>
  )
}
