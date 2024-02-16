import { GalleryImages } from '@/components/GalleryImages'
import React from 'react'

export default function GalleryPage() {
  return (
    <>
    <div className='relative w-full h-[45vh] gallery bg-black flex justify-center items-center'>
        <div className='absolute bg-black h-full w-full opacity-70'></div>
       <h1 className='font-bold text-[70px] text-white z-10'>Gallery</h1>
    </div>
    <GalleryImages />
    </>
  )
}
