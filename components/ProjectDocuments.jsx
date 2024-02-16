import { projectitems } from '@/data/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProjectDocuments = () => {
  return (
    <div className='w-full bg-white text-[#00375C] p-10'>
        <div className='w-full flex flex-wrap md:flex-row gap-5 justify-center'>
            {
                projectitems.map((projectitem) => (
                    <div className='rounded-lg shadow-lg' key={projectitem.id}>
                        <Image src={projectitem.projectimage} alt='proimage' className='pb-3'/>
                        <div className='pl-2'>   
                        <p className='text-xs mb-1'>{projectitem.projectdate}</p>
                        <p className='font-bold text-xl mb-2'>{projectitem.projectname}</p>
                       <Link href={projectitem.projectdocument} target='_blank'>
                        <button className='btn mb-2 bg-[#00375C] text-white'> Read more</button>
                       </Link> 
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
