'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from './UI/Button'
import FormField from './UI/FormField'
import { z } from 'zod'
import { loginUser } from '@/lib/users'
import { useRouter } from 'next/navigation'

const SignInForm = () => {

    type FormErrors = Partial<Record<keyof FormData, string[]>>;
    type FormData = z.infer<typeof SignInSchema>;

    const router = useRouter()

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const SignInSchema = z.object({
        email: z.string().trim().min(1, 'Email is required').email("Enter a valid email address"),
        password: z.string().trim().min(1, "Password is required")
    })

    const validateForm = () => {
        try {
            const checkErros = SignInSchema.parse(formData)
            return {};
        } catch (error) {
            if (error instanceof z.ZodError) {
                return error.flatten().fieldErrors;
            }
            return {};
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const checkErros = validateForm()
        setErrors(checkErros)
        if(Object.keys(checkErros).length !== 0) {
            return
        }
        const ans = await loginUser(formData.email, formData.password)
        if(ans.status === 'failed') {
            console.log(ans.error)
            return
        }
        
        router.push('/')
    }
    
  return (
    <form className='w-full' onSubmit={handleSubmit}>       
        <FormField error={errors.email && errors.email[0]} value={formData.email} onChange={handleChange} name='email' type='email' text='Email' />
        <FormField error={errors.password && errors.password[0]} value={formData.password} onChange={handleChange} name='password' type='password' text='Password' />
        <Button type='submit' text='Sign up' className='w-full bg-blue-500 mt-2' />
    </form>
  )
}

export default SignInForm