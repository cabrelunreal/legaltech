
import HeaderLogo from '@/app/components/proprieteIntellectuelle/General/HeaderLogo'
import FormStep1 from '@/app/components/Translate/FormStep1'
import React from 'react'

const Step1 = () => {
  return (
    <div>
        <div>
            <HeaderLogo />
        </div>

        <div className='my-[120px] pt-[12px] md:px-6 px-2 m-auto md:w-5/12 border border-gray-200 shadow-sm rounded-md'>
            <p className='text-center text-lg'>Etape 1 - Etape 2 - Etape 3</p>
            <h2 className='text-center uppercase text-2xl'>completez ces informations</h2>
            <div>
                <FormStep1 />
            </div>
        </div>
    </div>
  )
}

export default Step1