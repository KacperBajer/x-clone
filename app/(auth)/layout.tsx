import { getUser } from '@/lib/users';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const user = await getUser()
    if(user) {
        redirect('/')
    }

  return (
    <div className='flex h-screen bg-black text-white'>
        <div className='flex-1 flex justify-center items-center h-full'>
            {children}
        </div>
        <div className='flex-1 h-full hidden xl:block'>
            <Image 
                alt=''
                src={'/side-img.svg'}
                width={1000}
                height={1000}
                className='w-full h-full object-cover bg-no-repeat'
            />
        </div>
    </div>
  )
}

export default layout