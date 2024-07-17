import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            <div>
                <Link href='/'>YohanSocial</Link>
            </div>
            <div>
                link
            </div>

            <div className='max-md:hidden md:flex'>
                login
            </div>

            {/* mobile menu */}
            <div className='hidden max-md:flex'>
                <MobileMenu />
            </div>
            
        </div>
    )
}

export default Navbar