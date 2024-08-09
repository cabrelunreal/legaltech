import React from 'react'

interface ButtonProps{
    onClick?: () => void;
    title?: string;
    structure: string;
}

const Button:React.FC<ButtonProps> = ({onClick, title, structure}) => {
  return (
    <div>
        <div>
            <button onClick={onClick} className={structure}>{title}</button>
        </div>
    </div>
  )
}

export default Button