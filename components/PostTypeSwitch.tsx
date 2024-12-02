'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Options = 'foryou' | 'following';

const PostTypeSwitch = () => {
  const [selected, setSelected] = useState<Options>('foryou');

  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    router.push(`${path}?mode=${selected}`)
  }, [selected])

  return (
    <div className="w-full flex justify-center sticky top-4">
      <div className="p-1 w-full rounded-full border-2 border-dark-100 bg-dark-100/70">
        <div className="relative flex items-center">
          {/* Background Slider */}
          <div
            className="absolute bg-dark-100 rounded-full transition-transform duration-300 ease-in-out"
            style={{
              width: '50%',
              height: '100%',
              transform: selected === 'foryou' ? 'translateX(0)' : 'translateX(100%)',
            }}
          />
          {/* Buttons */}
          <button
            onClick={() => setSelected('foryou')}
            className={`rounded-full w-1/2 py-1.5 px-4 appearance-none outline-none z-10 text-xs ${
              selected === 'foryou' ? 'font-semibold' : 'font-medium'
            }`}
          >
            For you
          </button>
          <button
            onClick={() => setSelected('following')}
            className={`rounded-full w-1/2 py-1.5 px-4 appearance-none outline-none z-10 text-xs ${
              selected === 'following' ? 'font-semibold' : 'font-medium '
            }`}
          >
            Following
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTypeSwitch;
