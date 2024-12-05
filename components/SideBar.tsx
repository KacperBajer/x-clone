'use client'
import { SideBarLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Button from './UI/Button'
import { User } from '@/lib/types'
import CreatePostPopup from './CreatePostPopup'

type Props = {
    user: User
}

const SideBar = ({user}: Props) => {
  
    const path = usePathname()
    const [showCreatePostPopup, setShowCreatePostPopup] = useState<User | false>(false)

    return (
    <div className='border-2 border-dark-100 p-4 rounded-md w-[250px] top-4 h-fit min-h-[calc(100vh-32px)] flex flex-col sticky'>
        {showCreatePostPopup && <CreatePostPopup setShowPopup={setShowCreatePostPopup} />}
        <Image 
            alt=''
            src={'/X_logo.jpg'}
            width={600}
            height={600}
            className='h-10 w-fit'
        />
        <section className='flex flex-col mt-20 text-sm font-medium gap-2 flex-1'>
            {SideBarLinks.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-2 hover:bg-dark-100 rounded-md outline-none appearance-none ${path === item.href && "bg-dark-100"}`}
                >
                    {item.icon}
                    {item.name}
                </Link>
            ))}
            <Button onClick={() => setShowCreatePostPopup(user)} text='Create post' className='mt-3 bg-blue-600' />
        </section>
        
        <section>
            <div className='flex gap-3 items-center p-3'> 
                <Image 
                    alt=''
                    src={'/avatar.png'}
                    width={100}
                    height={100}
                    className='w-10 h-10 rounded-full'
                />
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-100'>{user.displayname}</p>
                    <button className='text-xs text-gray-400 text-left'>Logout</button>
                </div>
            </div>    
        </section>
    </div>
  )
}

export default SideBar