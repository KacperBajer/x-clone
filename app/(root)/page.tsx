import ImagesLayout from '@/components/ImagesLayout'
import PostCard from '@/components/PostCard'
import PostTypeSwitch from '@/components/PostTypeSwitch'
import { posts } from '@/lib/constants'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 flex flex-col'>
      <PostTypeSwitch />
      <div className='flex flex-col mt-5 gap-3'>
        {posts.map(item => (
          <PostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default page