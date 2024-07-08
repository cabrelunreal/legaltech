import React from 'react'
import Traduction from '../components/Traduction'
import Image from 'next/image'

const Traductions = () => {

    function handleOnclick (){
        console.log('error')
    }
  return (
    <div>
        <div>
            <div>
                <h2>traduction des documents</h2>
                <p>Protéger juridiquement vos produits</p>
            </div>
            <div>
                <div>
                    <Image 
                        src=''
                        alt='documents'
                        width={300}
                        height={300}
                        className=''
                    ></Image>
                </div>
                <div>
                    <div>
                        <Traduction image='' description='Contrats d&apos;affaires' imagedescription='' onClick={handleOnclick} />
                    </div>
                    <div>
                        <Traduction image='' description='Contrats' imagedescription='' onClick={handleOnclick} />
                    </div>
                    <div>
                        <Traduction image='' description='Documents OHADA' imagedescription='' onClick={handleOnclick} />
                    </div>
                    <div>
                        <Traduction image='' description='Autre documents' imagedescription='' onClick={handleOnclick} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traductions