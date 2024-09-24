import React from 'react';

interface WhyProps {
    description?: string;
    title?: string;
    moreDescription?: string;
    custom?: string;
}

const Why: React.FC<WhyProps> = ({ description, title, moreDescription, custom }) => {
  return (
    <div className='py-2'>
        <div className='w-full px-4 m-auto text-center'>
            <div className='text-lg md:text-3xl font-semibold py-4'>
                <h2>{title}</h2>
            </div>
            <div className='text-center py-3 text-black md:text-2lg md:text-lg'>
                <p>{description}</p>
                <p className={`py-8 ${custom}`}>{moreDescription}</p>
            </div>
        </div>
    </div>
  );
}

export default Why;
