import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const Login = () => {
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
                <h2>connectez-vous</h2>
                <p>Connectez vous pour avoir accès à votre portail</p>
            </div>
            <div>
                <label>Login</label>
                <input type="text" name="login" id="login" placeholder='login' />
                <label>Mot de passe</label>
                <input type="password" name="password" id="password" placeholder='password' />
                <div>
                    <div>
                        <input type="checkbox" name="reste" id="reste" placeholder='Reste connecté' />
                    </div>
                    <div>
                        <p>Mot de passe oublié</p>
                    </div>
                </div>
                <Button title='connexion' className='' />
            </div>
        </div>
    </div>
  )
}

export default Login