"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { mobileLinks } from '@/constanst'

import { usePathname } from 'next/navigation'
import { useAuth, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    const path = usePathname()
    const { userId } = useAuth()
    return (
        <div className='h-20 flex items-center justify-between'>
            <div>
                <Link href='/' className='font-bold text-xl text-blue-500'>YohanSocial</Link>
            </div>

            <div className='flex items-center gap-4 max-md:hidden'>
                {mobileLinks.slice(0, 3).map((link) => {
                    const isActive = link.route === path
                    return (
                        <Link href={link.route} key={link.route} className={`flex items-center gap-2 px-3 hover:bg-slate-200 py-1 rounded-3xl ${isActive ? "bg-slate-300" : ""}`}>
                            <Image className='text-white' src={link.icon} alt={link.label} width={20} height={20} />
                            <span className='capitalize'>{link.label}</span>
                        </Link>
                    )
                })}
            </div>

            <div className='max-md:hidden md:flex'>
                {userId
                    ?
                    <UserButton />
                    :
                    <div className='flex gap-3 items-center'>
                        <Link href="/sign-in" className='py-1 px-2 rounded-3xl text-sm border-blue-400 border hover:bg-blue-400 hover:text-white transition-all'>Login</Link>
                        <Link href="/sign-up" className='py-1 px-2 rounded-3xl text-sm border-blue-400 border hover:bg-blue-400 hover:text-white transition-all'>Register</Link>
                    </div>

                }

            </div>

            {/* mobile menu */}
            <div className='hidden max-md:flex'>
                <MobileMenu />
            </div>

        </div>
    )
}

export default Navbar