import React from 'react'
import Button from '../components/Button'

const Welcomes = () => {
  return (
    <div className='w-8/12 m-auto py-64 text-center text-white'>
        <div>
            <div>
                <h1 className='uppercase font-semibold text-5xl py-3'>Le juridique accessible par tous et pour tous</h1>
                <p className='text-lg capitalize pb-6'>Services juridiques simples, abordables à la portée de main.</p>
            </div>
            <div>
                <Button title='Inscription' className='uppercase px-6 py-3 bg-white text-black rounded-md' />
                <Button title='Connexion' className='uppercase px-6 ml-4 py-3 bg-white text-black rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default Welcomes;
