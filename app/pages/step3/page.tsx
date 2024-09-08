import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import FormStep3 from '@/app/components/Translate/FormStep3'
import React from 'react'

const Step3 = () => {
  return (
    <div>
        <div>
          <Header />
        </div>

        <div className='py-4 my-[12px] md:my-[90px] pt-12'>
            <div>
                <FormStep3 />
            </div>
        </div>
    </div>
  )
}

export default Step3