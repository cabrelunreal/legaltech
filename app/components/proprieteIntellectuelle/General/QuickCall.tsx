import React from 'react'
import Heads from './Heads'
import Button from './Button'
import Image from 'next/image'

const QuickCall = () => {
  return (
    <div className='bg-gray-50'>
        <div className='w-8/12 m-auto grid grid-cols-2 gap-4 py-24'>
            <div>
                <Heads 
                title='Demandez à un professionnel du droit'
                headcust='text-xl'
                description='Obtenez les bons conseils avec un avocat à vos côtés'
                structure=''
                cust='py-3 text-lg'
                />
                <Button title='Obtenir une assistance juridique'
                structure='w-64 text-xl bg-green-700 text-white py-1 rounded-sm'
                />
            </div>
            <div>
                <div>
                    <Heads title='Contactez un assistant au (237) 679-1568'
                    description='Du lundi au vendredi : de 6 h à 20 h (GMT)Les week-ends : de 7 h à 16 h (GMT)'
                    structure=''
                    headcust='text-xl'
                    cust='py-3 text-lg'
                    />
                </div>
                <div className='text-lg flex'>
                    <p>Suivez-nous: </p>
                    <p>
                        <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_whatsapp-icon_dncw6x.png'
                        alt='whatsapp'
                        width={40}
                        height={30}
                        className='mx-2'
                        ></Image>
                    </p>
                    <p>
                        <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_telegram_lq4e8y.png'
                        alt='whatsapp'
                        width={40}
                        height={30}
                        className='mx-2'
                        ></Image>
                    </p>
                    <p>
                        <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_facebook_isgni8.png'
                        alt='whatsapp'
                        width={40}
                        height={30}
                        className='mx-2'
                        ></Image>
                    </p>
                    <p>
                        <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/devicon_twitter_xmnvyt.png'
                        alt='whatsapp'
                        width={32}
                        height={30}
                        className='mx-2'
                        ></Image>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickCall