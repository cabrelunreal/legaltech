import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import Image from 'next/image'
import React from 'react'

const RegisterStep1 = () => {
  return (
    <div>
        <div>
            <div>
                <div className='flex justify-center py-3'>
                    <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945934/logo_1_tvf3xq.png'
                        alt='LOGO'
                        width={100}
                        height={100}
                        className=''
                    ></Image>
                </div>
                <div>
                    <Heads 
                        title='Détails du compte' 
                        description='saisir les détails de votre compte pour commencer votre inscription.'
                        cust='md:text-2lg capitalize'
                        structure='text-center'
                    />
                </div>
            </div>
            <div>
                <form action="">
                    <div  className='py-2'>
                        <label htmlFor="">User Name *</label><br />
                        <input type="text" name="name" id="name" className='border w-full py-2 px-3 rounded-md' placeholder='entrez votre nom complet' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">User Name *</label><br />
                        <input type="email" name="email" className='border w-full py-2 px-3 rounded-md' id="email" placeholder='entrez votre adresse mail' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Password *</label><br />
                        <input type="password" name="password" className='border w-full py-2 px-3 rounded-md' id="password" placeholder='entrez votre mot de passe' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Confirm Password *</label><br />
                        <input type="password" name="confirmPass" className='border w-full py-2 px-3 rounded-md' id="confirmPass" placeholder='confirmez votre mot de passe' />
                    </div>
                    <div className='flex justify-center py-6'>
                        <Button title='annuler' structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                        <Button title='suivant' structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterStep1