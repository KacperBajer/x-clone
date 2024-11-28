import RightBar from '@/components/RightBar';
import SideBar from '@/components/SideBar';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='p-4 bg-black flex justify-center text-white'>
      <div className='flex min-h-screen max-w-[1300px] w-full gap-8'>
        <SideBar />
        {children}
        <RightBar />
      </div>
    </div>
  )
}

export default layout