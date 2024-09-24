import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'

const Register = () => {
  return (
    <div>
        <div>
            <Image
                src=''
                alt='signUp'
                width={180}
                height={180}
                className=''
            />
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
                        />
                    </h2>
                    <h4>Détails du compte</h4>
                    <p>Saisissez les détails de votre compte pour commencer votre inscription.</p>
                </div>
                <div id='formInit'>
                    <div>
                        <label>Nom d&apos;utilisateur</label>
                        <input type="text" name="username" id="username" placeholder='Veuillez entrer votre nom'/>
                        <label>Adresse e-mail</label>
                        <input type="email" name="email" id="email" placeholder='Veuillez entrer votre e-mail'/>
                        <label>Mot de passe</label>
                        <input type="password" name='password' id='password' placeholder='Veuillez saisir votre mot de passe' />
                        <label>Confirmer votre mot de passe</label>
                        <input type="password" name='confPass' id='confPass' placeholder='Confirmez votre mot de passe'/>
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
                            />
                        </h2>
                        <h4>Détails du profil</h4>
                        <p>Saisissez les détails de votre profil pour continuer votre inscription.</p>
                    </div>
                    <div>
                        <label>Nom du profil à afficher</label>
                        <input type="text" name='pseudo' id='pseudo' placeholder='Nom du profil à afficher' />
                        <div>
                            <div>
                                <label>Genre</label>
                                <select name="genre" id="genre">
                                    <option value="Masculin">Masculin</option>
                                    <option value="Féminin">Féminin</option>
                                </select>
                            </div>
                            <div>
                                <label>Pays/Région</label>
                                <input type="text" name="country" id="country" placeholder='Entrez votre pays ou région' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="file" name="photo" id="photo" />
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
                            />
                        </h2>
                        <h4>Profils sociaux</h4>
                        <p>Saisissez les détails de vos profils sociaux pour compléter votre inscription.</p>
                    </div>
                    <div>
                        <label>Page Facebook</label>
                        <input type="text" name='facebook' id='facebook' placeholder='Votre profil Facebook' />
                        <label>Twitter</label>
                        <input type="text" name="twitter" id="twitter" placeholder='Votre profil Twitter' />
                        <label>Site web</label>
                        <input type="text" name='siteWeb' id='siteWeb' placeholder='Entrez l’adresse de votre site web'/>
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

export default Register;
