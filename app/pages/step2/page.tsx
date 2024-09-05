import HeaderLogo from '@/app/components/proprieteIntellectuelle/General/HeaderLogo'
import FormStep2 from '@/app/components/Translate/FormStep2'
import React from 'react'

const Step2 = () => {
  return (
    <div>
        <div>
            <HeaderLogo />
        </div>

        <div className='my-[120px] pt-[12px] md:px-6 px-2 m-auto md:w-5/12 border border-gray-200 shadow-sm rounded-md'>
            <p className='text-center text-lg'>Etape 1 - <span className='text-green-700 font-semibold'>Etape 2</span> - Etape 3</p>
            <h2 className='text-center py-2 uppercase text-2xl'>completez ces informations</h2>
            <div>
                <FormStep2 />
            </div>
        </div>
    </div>
  )
}

export default Step2