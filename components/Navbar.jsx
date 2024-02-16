import React from 'react'
import Image from 'next/image';
import { urclogo } from '@/public/images';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
<div className="navbar bg-white text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        <li><Link href='/'>Home</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/project'>Project</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Image 
    src={urclogo}
    alt='urclogo'
    width={115}
    priority
    />
  </div>
  <div className="navbar-end">
    <Link href='https://forms.gle/PijqP1XgTJb8ZZhv6' target='_blank'>
    <button className="btn text-white bg-[#00375C]">
      <div className="indicator">
        Join Us
      </div>
    </button>
    </Link>
  </div>
  
</div>
    </>
  )
}
