import React from 'react'
import Consult from '../components/Consult'
import Image from 'next/image'

const Experts = () => {
  return (
    <div>
        <div>
            <h2>Nos experts</h2>
            <p>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
        </div>
        <div>
            <div>
                <Consult />
            </div>
            <div>
                <Image
                    src=''
                    alt='expert'
                    width={300}
                    height={300}
                    className=''
                ></Image>
            </div>
        </div>
    </div>
  )
}

export default Experts