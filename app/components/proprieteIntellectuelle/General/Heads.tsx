import React from 'react'

interface HeadsProps{
    title: string;
    description?: string;
    structure: string;
    cust?: string;
    headcust?: string;
}

const Heads:React.FC<HeadsProps> = ({title, description, cust, headcust, structure}) => {
  return (
    <div>
        <div className={structure}>
            <h2 className={`py-1 font-bold text-3xl ${headcust}`}>{title}</h2>
            <p className={`pb-2 text-lg ${cust}`}>{description}</p>
        </div>
    </div>
  )
}

export default Heads