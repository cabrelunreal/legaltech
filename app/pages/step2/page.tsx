import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import FormStep2 from '@/app/components/Translate/FormStep2'
import React from 'react'

const Step2 = () => {
  return (
    <div>
        <div>
          <Header />
        </div>

        <div className='px-2'>
          <div className='md:my-[120px] my-12 md:pt-[12px] md:px-6 px-2 m-auto md:w-5/12 border border-gray-200 shadow-sm rounded-md'>
              <h2 className='text-center py-2 uppercase text-xl md:text-2xl'>completez ces informations</h2>
              <div>
                  <FormStep2 />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Step2