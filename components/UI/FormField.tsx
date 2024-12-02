import React, { ChangeEvent } from 'react'

type Props = {
    name: string
    type?: 'text' | 'password' | 'email'
    text: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    error?: string
}

const FormField = ({name, type = 'text', text, onChange, value, error}: Props) => {

    switch(type) {
        case 'password':
        case 'email':
        case 'text':
            return (
                <div className='mb-2'>
                    <label htmlFor={name} className='text-xs ml-1 text-gray-100'>{text}</label>
                    <input value={value} onChange={onChange} type={type} name={name} className='w-full border-2 mt-1 border-dark-100 bg-transparent appearance-none outline-none rounded-md px-3 py-2 text-sm text-gray-300 focus:text-white focus:border-dark-200 transition-all duration-300' placeholder={text} />
                    <p className='text-xs text-red-600 ml-1 mt-1'>{error}</p>
                </div>
            )
    }

}

export default FormField