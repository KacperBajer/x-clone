import React from 'react'

type Props = {
    text: string
    className?: string
    onClick?: () => void
}

const Button = ({text, className, onClick}: Props) => {
  return (
    <button
        className={`py-1.5 px-4 rounded-md text-sm transition-all ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button