import { toFollow } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const RightBar = () => {
  return (
    <div className='w-[350px] top-4 min-h-[calc(100vh-32px)] h-auto flex flex-col sticky gap-4'>
        <section className='w-full relative'> 
            <Image 
                alt=''
                src={'https://abs.twimg.com/images/anniversary_generic.png'}
                width={300}
                height={300}
                className='w-full h-fit rounded-xl'
            />
            <p className='absolute top-4 left-4 font-extrabold text-xl'>40% off Premium </p>
            <p className='absolute top-14 left-4'>For a limited time. Unlock the best of X.</p>
            <button className='rounded-full bg-white py-1.5 px-4 absolute outline-none appearance-none text-black left-4 bottom-4 font-bold text-sm'>Subscribe</button>
        </section>

        <section className='p-4 rounded-xl border-2 border-dark-100'>
            <p className='text-xl font-bold mb-4'>Who to follow</p>
            <div className='flex flex-col gap-4'>
                {toFollow.map((item, index) => (
                    <div key={index} className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2'>
                            <Image 
                                alt=''
                                src={item.avatarUrl}
                                width={40}
                                height={40}
                                className='w-10 h-10 rounded-full'
                            />
                            <div>
                                <p className='font-bold text-[15px]'>{item.displayName}</p>
                                <p className='text-[14px] text-gray-400'>@{item.username}</p>
                            </div>
                        </div>
                        <button className='bg-white/90 py-1.5 rounded-full px-4 text-black text-sm font-bold'>Follow</button>
                    </div>
                ))}
            </div>
           
        </section>
    </div>
  )
}

export default RightBar