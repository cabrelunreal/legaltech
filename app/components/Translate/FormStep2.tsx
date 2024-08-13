'use client'
import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'
import { useRouter } from 'next/navigation'

const FormStep2 = () => {
  
    const router = useRouter();
  
    const onclickEnterprise = (path: string) => {
        router.push(path);
    };
  return (
    <div>
        <div>
            <form className='grid w-8/12 m-auto'>
                <div className='grid md:grid-cols-2 gap-2 py-4'>
                    <div>
                        <label htmlFor="" className='text-lg font-semibold py-3'>Nom: *</label><br />
                        <input type="text" className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' name="nom" id="nom" placeholder='Noms' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-lg font-semibold py-3'>Prenoms: *</label><br />
                        <input type="text" className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' name="prenom" id="prenoms" placeholder='Prenoms' />
                    </div>
                </div>
                <div className='py-3'>
                    <label htmlFor="" className='text-lg font-semibold py-3'>Societe *</label><br />
                    <input type="text" className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' name="societe" id="societe" placeholder='Selectioner' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 py-3'>
                    <div>
                        <label htmlFor="" className='text-lg font-semibold py-3'>Telephone: *</label><br />
                        <input type="tel" className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' name="tel" id="tel" placeholder='Telephone' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-lg font-semibold py-3'>Email: *</label><br />
                        <input type="email" className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' name="email" id="email" placeholder='email' />
                    </div>
                </div>
                <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4 py-4'>
                    <div>
                        <Button title='annuler' onClick={() => onclickEnterprise('../../pages/step3')} structure='border w-full py-3 border-green-700 hover:bg-green-700 hover:text-white font-semibold uppercase' />
                    </div>
                    <div>
                        <Button title='continuer' structure='border w-full py-3 border-green-700  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormStep2