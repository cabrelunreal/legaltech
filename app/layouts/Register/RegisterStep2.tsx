import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Image from 'next/image'

const RegisterStep2 = () => {
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
                    <Heads title='Détails du profil' 
                        description='saisir les détails de votre compte pour commencer votre inscription.'
                        cust='md:text-2lg capitalize'
                        structure='text-center'
                    />
                </div>
            </div>
            <div>
                <form action="">
                    <div className='py-2'>
                        <label htmlFor="">Nom du profile a afficher *</label><br />
                        <input type="text" name="name" className='border w-full py-2 px-3 rounded-md' id="name" placeholder='nom du profile' />
                    </div>
                    <div>
                        <div className='py-2'>
                            <label htmlFor="">Genre *</label><br />
                            <select name="sex" id="sex" className='border w-full py-2 px-3 rounded-md'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='py-2'>
                            <label htmlFor="">Pays/Region *</label><br />
                            <select name="country" id="country" className='border w-full py-2 px-3 rounded-md'>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Benin">Benin</option>
                                <option value="Togo">Togo</option>
                                <option value="Cote d&apos;Ivoire">Cote d&apos;Ivoire</option>
                            </select>
                        </div>
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Photo de profile *</label><br />
                        <input type="file" name="pic" id="pic" className='border w-full py-2 px-3 rounded-md' placeholder='Photo de profil' />
                    </div>
                    <div className='flex justify-center py-6'>
                        <Button title='retour'  structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                        <Button title='suivant'  structure='py-2 mx-4 px-4 rounded-sm text-white uppercase bg-green-700' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterStep2