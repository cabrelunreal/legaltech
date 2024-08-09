import React from 'react'
import Button from './Button'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Consult = () => {
  return (
    <div className='border py-6 m-auto rounded-md'>
        <div className='text-center w-full'>
            <h2 className='text-semibold md:text-xl px-20 py-2 text-semibold uppercase'>Consulter un expert juridique n&apos;a jamais été aussi facile</h2>
            <div className='w-fit flex md:flex-row flex-col text-sm md:text-lg m-auto'>
                <div className='mx-4'>
                    <p className='underline hover:cursor-pointer text-blue-500'><i className="fa-solid fa-envelope"></i>contact@legaltech.com</p>
                </div>
                <div className='mx-4'>
                    <p className='hover:underline hover:cursor-pointer text-blue-500'><i className="fa-solid fa-phone"></i> +237 672 442 800</p>
                </div>
            </div>
        </div>
        <div className='w-full px-4'>
            <form action="submit" className='py-4 m-auto'>
                <input type="email" className='border w-full my-2 focus:border-green-500 px-2 py-3 rounded-md focus:outline-none' placeholder='contact@legaltech.com' /><br />
                <input type="text" className='border w-full px-2 py-3 focus:border-green-500 my-2 rounded-md focus:outline-none' placeholder='Objet' /><br />
                <textarea name="message" className='border w-full h-48 px-2  focus:border-green-500 py-3 my-2 rounded-md focus:outline-none' id="message" placeholder='Message'></textarea>
                <Button title='Envoyer' className='w-full text-lg md:text-xl py-3 bg-green-700 text-white rounded-md' />
            </form>
        </div>
    </div>
  )
}

export default Consult