import React from 'react'
import MenuItem from './MenuItem'
import { IoMdHome } from "react-icons/io"
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from 'next/link'
export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">

      <div className='flex'>
        <MenuItem  title="Home" address="/" Icon={IoMdHome} />
        <MenuItem  title="About" address="/about" Icon={BsFillInfoCircleFill} />

      </div>
      <div className=''>G
        <Link href="/ " className='text-2xl'>
        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
     <div className=''>
      
     </div>
    </div>
  )
}