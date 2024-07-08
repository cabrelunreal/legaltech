import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'

const Register = () => {
  return (
    <div>
        <div>
            <Image
                src={}
                alt='signUp'
                width={180}
                height={180}
                className=''
            ></Image>
        </div>
        <div>
            <form action="onsubmit">
                <div>
                    <h2>
                        <Image
                            src=''
                            alt='signUp'
                            width={180}
                            height={180}
                            className=''
                        ></Image>
                    </h2>
                    <h4>Détails du compte</h4>
                    <p>saisir les détails de votre compte pour commencer votre inscription.</p>
                </div>
                <div id='formInit'>
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" id="username" placeholder='veillez entrez votre nom'/>
                        <label>E-mail Adresse</label>
                        <input type="email" name="email" id="email" placeholder='veillez entrez votre mail'/>
                        <label>Mot de passe</label>
                        <input type="password" name='password' id='password' placeholder='veillez saisir votre mot de passe' />
                        <label>Confirmer votre mot de passe</label>
                        <input type="password" name='confPass' id='confPass' placeholder='confirmez votre mot de pass'/>
                        <div>
                            <div>
                                <Button title='Annuler' className='' />
                            </div>
                            <div>
                                <Button title='Suivant' className='' />
                            </div>
                        </div>
                    </div>
                </div>

                <div id='formSec'>
                        <div>
                            <h2>
                                <Image
                                    src=''
                                    alt='signUp'
                                    width={180}
                                    height={180}
                                    className=''
                                ></Image>
                            </h2>
                            <h4>Détails du profil</h4>
                            <p>saisir les détails de votre compte pour commencer votre inscription.</p>
                        </div>
                        <div>
                            <label>Nom du profil à afficher</label>
                            <input type="text" name='pseudo' id='pseudo' placeholder='Nom du profil a afficher' />
                            <div>
                                <div>
                                    <label>Genre</label>
                                    <select name="genre" id="genre">
                                        <option value="Masculin">Male</option>
                                        <option value="Feminin">Feminin</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Pays/Region</label>
                                    <input type="text" name="country" id="country" placeholder='entrex votre pays ou region' />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="file" name="photo" id="photo" placeholder='' />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Button title='Retour' className='' />
                                </div>
                                <div>
                                    <Button title='Suivant' className='' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id='formTer'>
                        <div>
                            <h2>
                                <Image
                                    src=''
                                    alt='signUp'
                                    width={180}
                                    height={180}
                                    className=''
                                ></Image>
                            </h2>
                            <h4>Profils sociaux</h4>
                            <p>saisir les détails de votre compte pour commencer votre inscription.</p>
                        </div>
                        <div>
                            <label>Page Facebook</label>
                            <input type="text" name='pseudo' id='pseudo' placeholder='Nom du profil a afficher' />
                            <label>Twitter</label>
                            <input type="text" name="twitter" id="twitter" placeholder='votre profil twitter' />
                            <label>Site web</label>
                            <input type="text" name='site web' id='site web' placeholder='entrez l&apos;adresse de votre site web'/>
                            <div>
                                <div>
                                    <Button title='Retour' className='' />
                                </div>
                                <div>
                                    <Button title='Confirmer' className='' />
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Register