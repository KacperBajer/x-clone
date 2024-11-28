import { Post } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import ImagesLayout from './ImagesLayout'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { IoStatsChartSharp } from 'react-icons/io5'
import { LuShare } from 'react-icons/lu'
import { formatDate } from '@/lib/func'

type Props = {
  data: Post
}

const PostCard = ({ data }: Props) => {
  return (
    <div key={data.id} className='p-4 w-full border-2 gap-3 border-dark-100 rounded-lg flex'>
      <Image
        alt=''
        src={data.author.avatarUrl}
        width={100}
        height={100}
        className='w-10 h-10 rounded-full'
      />
      <div className='flex flex-col w-full'>
        <p className='text-sm font-semibold'>{data.author.displayName}<span className='text-gray-400 text-xs font-medium ml-2'>@{data.author.username} • {formatDate(data.createdAt)}</span></p>
        <p className='text-sm mt-1 mb-2'>{data.content}</p>
        <div>
          <ImagesLayout images={data.images} />
        </div>
        <div className='flex justify-between items-center text-gray-500 text-sm mt-3 px-1'>
          <div className='flex items-center gap-1'>
            <FaRegComment />
            <p>{data.comments}</p>
          </div>
          <div className='flex items-center gap-1'>
            <BiRepost style={{ fontSize: '20px' }} />
            <p>{data.retweets}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FaRegHeart />
            <p>{data.likes}</p>
          </div>
          <div className='flex items-center gap-1'>
            <IoStatsChartSharp />
            <p>{data.likes}</p>
          </div>
          <LuShare style={{ fontSize: '18px' }} />
        </div>
      </div>
    </div>
  )
}

export default PostCard