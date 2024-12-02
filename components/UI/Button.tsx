import React, { ButtonHTMLAttributes } from 'react'

type Props = {
  text: string
  className?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({text, className, onClick, ...props}: Props) => {
  return (
    <button
        className={`py-1.5 px-4 rounded-md text-sm transition-all ${className}`}
        onClick={onClick}
        {...props}
    >
        {text}
    </button>
  )
}

export default Button