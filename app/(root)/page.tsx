import PostCard from '@/components/PostCard'
import PostTypeSwitch from '@/components/PostTypeSwitch'
import { posts } from '@/lib/constants'
import { SearchParams } from 'next/dist/server/request/search-params'
import React from 'react'

type Props = {
  searchParams: SearchParams
}

const page = async ({searchParams}: Props) => {

  const params = await searchParams
  const mode = params.mode

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