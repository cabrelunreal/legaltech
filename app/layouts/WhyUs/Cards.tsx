import Card from '@/app/components/whyUs/card'
import React from 'react'

const Cards = () => {
  return (
    <div>
        <div>
            <div className='py-8 text-center md:text-3xl'>
                <h2>QUI A BESOIN DE TRIBUNEJUSTICE ?</h2>
            </div>
            <div className='w-full bg-gray-50 py-12'>
                <div className='md:w-9/12 m-auto grid md:grid-cols-3 gap-4'>
                    <div>
                        <Card
                            image='https://res.cloudinary.com/dedakscgk/image/upload/v1724924287/WhatsApp_Image_2024-08-28_at_17.00.13_1_wty0hx.png'
                            imagedescription='entreprises'
                            Name='Entreprises'
                        />
                    </div>
                    <div>
                        <Card
                            image='https://res.cloudinary.com/dedakscgk/image/upload/v1724924287/WhatsApp_Image_2024-08-28_at_17.02.26_1_g0tahy.png'
                            imagedescription='startups'
                            Name='Startups'
                        />
                    </div>
                    <div>
                        <Card
                            image='https://res.cloudinary.com/dedakscgk/image/upload/v1724924288/Screen_Shot_2024-08-28_at_17.09.17_1_w5oxpf.png'
                            imagedescription='particuliers'
                            Name='Particuliers'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards