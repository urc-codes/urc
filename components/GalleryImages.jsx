import { globalinages, nationalinages, steminages } from '@/data/constant'
import Image from 'next/image'
import React from 'react'

export const GalleryImages = () => {
  return (
    <div className='p-10 bg-white text-[#00375C] flex flex-col gap-5'>
        <div className='w-full'>
            <h1 className='font-semibold mb-5'>STEM FESTIVAL 2021</h1>
            <div className='flex flex-wrap md:flex-row gap-5 justify-center'>
            {
                steminages.map((steminage) => (
                <div key={steminage.id} className=''>
                    <Image src={steminage.image} alt='galleryimage'/>
                </div>
                ))
            } 
            </div>
        </div>
        <div className='w-full'>
            <h1 className='font-semibold mb-5'>GLOBAL MONITORING FOR ENVIRONMENT & SECURITY  INCUBATION CHALLENGE 2021</h1>
            <div className='flex flex-wrap md:flex-row gap-5 justify-center'>
            {
                globalinages.map((globalinage) => (
                <div key={globalinage.id} className=''>
                    <Image src={globalinage.image} alt='galleryimage' />
                </div>
                ))
            } 
            </div>
        </div>
        <div className='w-full'>
            <h1 className='font-semibold mb-5'>NATIONAL ENERGY QUIZ & INNOVATION CHALLENGE</h1>
            <div className='flex flex-wrap md:flex-row gap-5 justify-center'>
            {
                nationalinages.map((nationalinage) => (
                <div key={nationalinage.id} className=''>
                    <Image src={nationalinage.image} alt='galleryimage' />
                </div>
                ))
            } 
            </div>
        </div>
    </div>
  )
}
