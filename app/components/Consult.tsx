import React from 'react'
import Button from './Button'

const Consult = () => {
  return (
    <div className='border py-6 m-auto'>
        <div className='text-center w-full'>
            <h2 className='text-semibold text-xl text-semibold py-2 uppercase'>Consulter un expert juridique</h2>
            <p className='pb-3'>N&apos;a jamais été aussi facile</p>
            <div className='w-fit flex m-auto'>
                <div className='mx-4'>
                    <p>contact@legaltech.com</p>
                </div>
                <div className='mx-4'>
                    <p> +237 672 442 800</p>
                </div>
            </div>
        </div>
        <div className=' w-full'>
            <form action="submit" className='w-9/12 py-4 m-auto'>
                <input type="email" className='border w-full my-2 px-2 py-3 rounded-sm focus:outline-none' placeholder='contact@legaltech.com' /><br />
                <input type="text" className='border w-full px-2 py-3 my-2 rounded-sm focus:outline-none' placeholder='Objet' /><br />
                <textarea name="message" className='border w-full h-48 px-2 py-3 my-2 rounded-sm focus:outline-none' id="message" placeholder='Message'></textarea>
                <Button title='Envoyer' className='w-full text-lg py-2 bg-green-700 text-white rounded-sm' />
            </form>
        </div>
    </div>
  )
}

export default Consult