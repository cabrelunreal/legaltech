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
                <h2>Connectez-vous</h2> {/* Correction de la capitalisation */}
                <p>Connectez-vous pour avoir accès à votre portail</p> {/* Ajout du trait d'union */}
            </div>
            <div>
                <label>Login</label>
                <input type="text" name="login" id="login" placeholder='login' />
                <label>Mot de passe</label>
                <input type="password" name="password" id="password" placeholder='password' />
                <div>
                    <div>
                        <input type="checkbox" name="reste" id="reste" />
                        <label htmlFor="reste">Rester connecté</label> {/* Correction de l'orthographe et ajout d'un label */}
                    </div>
                    <div>
                        <p>Mot de passe oublié ?</p> {/* Ajout du point d'interrogation */}
                    </div>
                </div>
                <Button title='Connexion' className='' /> {/* Correction de la capitalisation */}
            </div>
        </div>
    </div>
  )
}

export default Login
