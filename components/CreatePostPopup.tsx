'use client'
import { User } from '@/lib/types';
import React from 'react'
import { useRef, useEffect } from 'react';

type Props = {
    setShowPopup: (state: false | User) => void
}

const CreatePostPopup = ({setShowPopup}: Props) => {

    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (ref.current && !ref.current.contains(event.target as Node)) {
            setShowPopup(false)
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

  return (
    <div className='flex w-full h-full fixed top-0 left-0 justify-center items-center bg-black/40'>
        <div ref={ref} className='rounded-xl p-10 border-2 border-dark-100 bg-black'>

        </div>
    </div>
  )
}

export default CreatePostPopup