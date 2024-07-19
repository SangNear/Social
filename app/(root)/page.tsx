import AddPosts from '@/components/AddPosts'
import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Stories from '@/components/Stories'
import React from 'react'

const Home = () => {
  return (
    <div className='flex gap-6 pt-4'>
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu />
      </div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div>
          <Stories />
          <AddPosts />
          <Feed />
        </div>

      </div>
      <div className='hidden lg:block w-[30%]'>
        <RightMenu />
      </div>
    </div>
  )
}

export default Home