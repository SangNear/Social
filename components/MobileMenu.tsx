
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { mobileLinks } from '@/constanst'
import Image from 'next/image'

const MobileMenu = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className='cursor-pointer ' />
                </SheetTrigger>
                <SheetContent className='bg-white'>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <div className='flex flex-col '>
                            {mobileLinks.map((mobileLink) => {
                                return (
                                    <Link key={mobileLink.label} href={mobileLink.route} className='flex items-center gap-2 p-4 hover:bg-slate-200 rounded-3xl'>
                                        <Image src={mobileLink.icon} alt={mobileLink.label} width={28} height={28} />
                                        <span className='font-medium text-lg capitalize'>{mobileLink.label}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileMenu