import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const ForgetPass = () => {
  return (
    <div>
        <div>
            <Image
                src=''
                alt=''
                width={300}
                height={300}
                className=''
            ></Image>
        </div>
        <div>
            <div>
                <Image
                    src=''
                    alt=''
                    width={100}
                    height={100}
                    className=''
                ></Image>
                <h2>Votre adresse mail</h2>
                <p>Votre adresse mail</p>
            </div>
            <div>
                <label>Adresse mail / Numéro de téléphone.</label>
                <input type="email" name="email" id="email" placeholder='login' />
                <Button title='Confirmer' className='' />
            </div>
        </div>
    </div>
  )
}

export default ForgetPass