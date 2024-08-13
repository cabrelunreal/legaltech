'use client'
import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'

const FormStep3 = () => {
  return (
    <div>
        <div>
            <form className='grid w-8/12 m-auto'>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='flex'>
                        <input type="radio" name="callMe" id="callMe" className='' /><p className='px-4 text-lg'>appellez moi</p>
                    </div>
                    <div className='flex'>
                        <input type="radio" name="contact" id="contact" /><p className='px-4 text-lg'>contactez moi par Email</p>
                    </div>
                </div>
                <div>
                    <div className='flex py-2'>
                        <input type="checkbox" name="shareData" id="shareData"  /> <p className='px-4 text-lg'>J&apos;accepte de partager mes données avec TRIBUNEJUSTICE *</p>
                    </div>
                    <div className='flex py-2'>
                        <input type="checkbox" name="mentionLegales" id="mentionLegales" /><p className='px-4 text-lg'>J’ai lu et accepte les mentions légales *</p>
                    </div>
                </div>
                <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4 py-4'>
                    <div>
                        <Button title='annuler' structure='border py-3 w-full border-green-700 hover:bg-green-700 hover:text-white font-semibold uppercase' />
                    </div>
                    <div>
                        <Button title='continuer' structure='border py-3 w-full border-green-700  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormStep3