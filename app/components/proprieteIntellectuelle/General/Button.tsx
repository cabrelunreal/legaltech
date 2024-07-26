import React from 'react'

interface ButtonProps{
    action?: () => void;
    title: string;
    structure: string;
}

const Button:React.FC<ButtonProps> = ({action, title, structure}) => {
  return (
    <div>
        <div>
            <button onClick={action} className={structure}>{title}</button>
        </div>
    </div>
  )
}

export default Button