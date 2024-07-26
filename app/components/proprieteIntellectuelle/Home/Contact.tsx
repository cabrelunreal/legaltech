import React from 'react'
import Button from '../General/Button'

const Contacts = () => {
  return (
    <div className='w-full py-8'>
        <div className='w-9/12 m-auto'>
            <form className='w-8/12 m-auto'>
                <div className='w-full grid grid-cols-2 gap-16'>
                    <div className='w-full'>
                        <input type="text" className='w-full rounded-sm bg-white py-4 focus:outline-none px-4 my-3' name="name" id="name" placeholder='Nom et Prenoms' />
                        <input type="email" className='w-full rounded-sm bg-white py-4 focus:outline-none px-4 my-3' name="Adresse email" id="email" placeholder='Email' />
                    </div>
                    <div>
                        <input type="tel" name="telephone" className='w-full rounded-sm bg-white py-4 focus:outline-none px-4 my-3' id="telephone" placeholder='Numero telephone' />
                        <input type="text" name="object" className='w-full rounded-sm bg-white py-4 px-4 focus:outline-none my-3' id="object" placeholder='Objet' />
                    </div>
                </div>
                <div className='w-full'>
                    <textarea name="message" id="message" className='w-full focus:outline-none h-48 py-4 px-4' placeholder='Message'></textarea>
                </div>
                <div className='flex justify-center py-4'>
                    <Button title='Annuler' structure='px-6 mx-3 py-3 uppercase border border-green-700 text-green-700 hover:border-none hover:text-white hover:bg-green-700 font-bold' />
                    <Button title='Envoyer' structure='px-6 mx-3 py-3 rounded-sm uppercase bg-green-700 text-white hover:bg-green-800 font-bold' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts