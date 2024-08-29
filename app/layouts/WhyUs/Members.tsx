import Member from '@/app/components/whyUs/Member'
import React from 'react'

const Members = () => {
  return (
    <div>
        <div className='py-8 text-3xl md:w-9/12 m-auto font-semibold text-center'>
            <h2>NOS LEADERS VISIONNAIRES</h2>
        </div>
        <div className='md:w-8/12 m-auto gap-4 grid md:grid-cols-3 md:grid-rows-2'>
            <div>    
            <Member 
                image="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/WhatsApp_Image_2024-08-27_at_19.48.25_1_d3nmfc.png"
                imagedescription="Badjeu"
                Name="Badjeu Kuitchoua"
                entitle="Chief Executive Office"
            />
            </div>
            <div>
            <Member 
                image="https://res.cloudinary.com/dedakscgk/image/upload/v1724924285/WhatsApp_Image_2024-08-27_at_19.48.25_2_efprtl.png"
                imagedescription="Baya"
                Name="Catherine Baya"
                entitle="Legal and IP counsel"
            />
            </div>
            <div>
            <Member 
                image="https://res.cloudinary.com/dedakscgk/image/upload/v1724924285/WhatsApp_Image_2024-08-27_at_19.48.25_3_tvczpg.png"
                imagedescription="Graziani"
                Name="Thierry Graziani"
                entitle="Chief Marketing Officer"
            />
            </div>
            <div>
            <Member 
                image="https://res.cloudinary.com/dedakscgk/image/upload/v1724925525/WhatsApp_Image_2024-08-27_at_19.48.25_4_n8vs7k.png"
                imagedescription="Fouda"
                Name="Clarisse Fouda"
                entitle="External Affairs and Partnership counsel"
            />
            </div>
            <div>
            <Member 
                image="https://res.cloudinary.com/dedakscgk/image/upload/v1724924285/WhatsApp_Image_2024-08-27_at_19.48.25_5_mu3gwm.png"
                imagedescription="Mvogo"
                Name="Jean-Paul Mvogo"
                entitle="Chief Impact Officer"
            />
            </div>
            <div>
                <Member 
                    image="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/WhatsApp_Image_2024-08-27_at_19.48.25_6_vgoher.png"
                    imagedescription="Leonce"
                    Name="Leonce Kousse"
                    entitle="Chief Technology & Product Officer"
                />
            </div>
        </div>
    </div>
  )
}

export default Members