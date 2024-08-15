'use client'
import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'
import { useRouter } from 'next/navigation'

const FormStep1 = () => {
  
    const router = useRouter();
  
    const onclickEnterprise = (path: string) => {
        router.push(path);
    };
    
  return (
    <div>
        <div>
            <form className='grid w-8/12 m-auto py-8'>
                <div className='py-2'>
                    <label htmlFor="" className='text-lg py-2 font-semibold'>Entres les exigences du porjet *</label><br />
                    <input type="text" className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' name="exigences" id="exigences" placeholder='Selectioner' />
                </div>
                <div className='py-2'>
                    <label htmlFor="" className='text-lg py-2 font-semibold'>Quel type de document souhaitez vous traduire? *</label><br />
                    <input type="text" className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' name="doctype" id="doctype" placeholder='Selectioner' />
                </div>
                <div className='py-2'>
                    <label htmlFor="" className='text-lg py-2 font-semibold'>Telechargez vos fichiers *</label><br />
                    <input type="file" className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' name="file" id="file" placeholder='Telechargex Vos Fichiers' />
                </div>
                <div className='py-2'>
                    <label htmlFor="" className='text-lg py-2 font-semibold'>Definir la specialization pour ce type de travail *</label> <br />

                    <input type="text" className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' name="specialization" id="specialization" placeholder='Selectioner' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 py-3'>
                    <div>
                        <label htmlFor="" className='text-lg py-2 font-semibold'>Langue source *</label><br />
                        <input type="text" className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' name="languageS" id="languageS" placeholder='Langue source' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-lg py-2 font-semibold'>langue cible *</label><br />
                        <input type="text" className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' name="language" id="language" placeholder='langue cible' />
                    </div>
                </div>
                <div className='md:w-4/12 mx-auto grid md:grid-cols-2 gap-4'>
                    <div>
                        <Button title='annuler' structure='border w-full py-3 border-green-500 rounded-sm hover:bg-green-700 hover:text-white font-semibold uppercase' />
                    </div>
                    <div>
                        <Button title='continuer' 
                onClick={() => onclickEnterprise('../../pages/step2')} structure='border w-full py-3 border-green-700 rounded-sm  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormStep1