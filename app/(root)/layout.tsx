import RightBar from '@/components/RightBar';
import SideBar from '@/components/SideBar';
import { getUser } from '@/lib/users';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const user = await getUser()
    if(!user) {
      redirect('/')
    }

  return (
    <div className='p-4 bg-black flex justify-center text-white'>
      <div className='flex min-h-screen max-w-[1300px] w-full gap-8'>
        <SideBar user={user} />
        {children}
        <RightBar />
      </div>
    </div>
  )
}

export default layout