import React from 'react'
import Button from '../General/Button'

const Contacts = () => {
  return (
    <div className='w-full py-8'>
        <div className='w-9/12 m-auto'>
            <form className='w-8/12 m-auto'>
                <div className='w-full grid grid-cols-2 gap-16'>
                    <div className='w-full'>
                        <label className='font-bold'>Type * :</label>
                        <select name="Deposant" id="deposant" className='w-full rounded-sm bg-white text-gray-400 py-4 focus:outline-none px-4 my-3'>
                            <option value="Sélectionner  le type  de votre demande">Sélectionner  le type  de votre demande</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <label className='font-bold'>Denomination / Nom complet * :</label>
                        <input type="text" className='w-full rounded-sm bg-white py-4 focus:outline-none px-4 my-3' name="nom" id="nom" placeholder='Dénomination(s) sociale(s) / Nom(s) et prénom(s) ' />
                        <label className='font-bold'>N° de téléphone * :</label>
                        <input type="tel" name="Numero de telephone" className='w-full rounded-sm bg-white py-4 px-4 focus:outline-none my-3' id="tel" placeholder='Numero de telephone' />
                    </div>

                    <div>
                        <label className='font-bold'>Déposant * :</label>
                        <select name="Deposant" id="deposant" className='w-full rounded-sm text-gray-400 bg-white py-4 focus:outline-none px-4 my-3'>
                            <option value="Selectionner votre  type de déposant">Selectionner votre  type de déposant</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <label className='font-bold'>Nationalité: </label>
                        <select name="Nationalite" id="nationalite" className='w-full text-gray-400 rounded-sm bg-white py-4 focus:outline-none px-4 my-3'>
                            <option value="Sélectionner votre pays">Sélectionner votre pays</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <label className='font-bold'>Adresse electronique* : </label>
                        <input type="email" name="email" className='w-full rounded-sm bg-white py-4 px-4 focus:outline-none my-3' id="object" placeholder='Adresse email' />
                    </div>
                </div>
                <div className='flex justify-center py-4'>
                    <Button title='Annuler' structure='px-6 mx-3 py-3 uppercase border border-green-700 text-green-700 hover:border-none hover:text-white hover:bg-green-700 font-bold' />
                    <Button title='Envoyer' structure='px-6 mx-3 py-3 rounded-sm uppercase bg-green-700 text-white hover:bg-green-800 font-bold' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts