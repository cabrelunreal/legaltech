import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Image from 'next/image'

const RegisterStep3 = () => {
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
                    />
                </div>
                <div>
                    <Heads title='Profils sociaux' 
                        description='Saisissez les détails de votre compte pour commencer votre inscription.'
                        cust='md:text-2lg capitalize'
                        structure='text-center'
                    />
                </div>
            </div>
            <div>
                <form action="">
                    <div className='py-2'>
                        <label htmlFor="">Page Facebook </label><br />
                        <input type="text" name="facebook" className='border w-full py-2 px-3 rounded-md' id="facebook" placeholder='Page Facebook' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Twitter </label><br />
                        <input type="text" name="tweet" id="tweet" className='border w-full py-2 px-3 rounded-md' placeholder='Twitter' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Site web </label><br />
                        <input type="text" name="site" id="site" className='border w-full py-2 px-3 rounded-md' placeholder='Site web' />
                        <p>Aucun champ n&apos;est obligatoire, cette partie est optionnelle.</p>
                    </div>
                    <div className='flex justify-center py-6'>
                        <Button title='Retour' structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                        <Button title='Confirmer' structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterStep3
