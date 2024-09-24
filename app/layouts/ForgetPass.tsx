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
            />
        </div>
        <div>
            <div>
                <Image
                    src=''
                    alt=''
                    width={100}
                    height={100}
                    className=''
                />
                <h2>Votre adresse e-mail</h2> {/* Correction de "mail" à "e-mail" */}
                <p>Votre adresse e-mail</p> {/* Correction de "mail" à "e-mail" */}
            </div>
            <div>
                <label>Adresse e-mail / Numéro de téléphone.</label> {/* Correction de "mail" à "e-mail" */}
                <input type="email" name="email" id="email" placeholder='login' />
                <Button title='Confirmer' className='' />
            </div>
        </div>
    </div>
  )
}

export default ForgetPass
