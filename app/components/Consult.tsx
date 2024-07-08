import React from 'react'
import Button from './Button'

const Consult = () => {
  return (
    <div>
        <div>
            <h2>Consulter un expert juridique</h2>
            <p>N&apos;a jamais été aussi facile</p>
            <div>
                <p>contact@legaltech.com</p>
            </div>
            <div>
                <p> +237 672 442 800</p>
            </div>
        </div>
        <div>
            <form action="submit">
                <input type="email" placeholder='contact@legaltech.com' />
                <input type="text" placeholder='Objet' />
                <textarea name="message" id="message" placeholder='Message'></textarea>
                <Button title='Envoyer' className='' />
            </form>
        </div>
    </div>
  )
}

export default Consult