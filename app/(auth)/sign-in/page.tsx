import SignInForm from '@/components/SignInForm'
import React from 'react'

const page = () => {
  return (
    <div className='p-10 border-2 border-dark-100 rounded-xl flex flex-col items-center w-[400px]'>
        <p className='text-4xl font-bold'>Log In</p>
        <p className='text-sm mt-4 text-center text-gray-300 mb-4'>Sign in to your account to continue!</p>
        <SignInForm />
    </div>
  )
}

export default page