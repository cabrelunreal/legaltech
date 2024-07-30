import React from 'react'
import Button from '../components/Button'

const Welcomes = () => {
  return (
    <div className='w-8/12 m-auto py-64 text-center text-white'>
        <div>
            <div>
                <h1 className='uppercase text-semibold text-5xl py-3'>le juridique accessible par tous</h1>
                <p className='text-lg capitalize pb-6'>services juridiques simple, abordables a la portee de main.</p>
            </div>
            <div>
                <Button title='inscription' className='uppercase  px-6 py-3 bg-white text-black rounded-md' />
                <Button title='connexion' className='uppercase px-6 ml-4 py-3 bg-white text-black rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default Welcomes