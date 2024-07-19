import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll  text-sm'>
      <div className='flex gap-8 w-max'>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src="/assets/icons/test.jpeg" alt='' width={60} height={60}  className='w-20 h-20 rounded-full'/>
          <span className='font-medium'>Yohan</span>
        </div>
      </div>
    </div>
  )
}

export default Stories