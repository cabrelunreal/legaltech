
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import FormStep1 from '@/app/components/Translate/FormStep1'
import React from 'react'

const Step1 = () => {
  return (
    <div>
        <div>
          <Header />
        </div>
        <div className='px-4 w-full'>
          <div className='md:my-[140px] w-full my-12 md:pt-[12px] md:px-6 px-2 md:m-auto md:w-5/12 border border-gray-200 shadow-sm rounded-md'>
              <h2 className='text-center uppercase text-xl pt-4 md:text-2xl'>completez ces informations</h2>
              <div>
                  <FormStep1 />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Step1