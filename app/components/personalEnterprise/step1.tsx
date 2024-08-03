import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'

const Step1 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Saisissez votre nom'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="text-sm font-semibold">Prénoms</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder='Saisissez votre prénom'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-semibold">Nationalité</label>
            <select
              name="country"
              id="country"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Cameroon">Cameroon</option>
              <option value="Benin">Benin</option>
              <option value="Cote Ivoire">Côte d&apos;Ivoire</option>
              <option value="Togo">Togo</option>
              <option value="Tchad">Tchad</option>
            </select>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="numberID" className="text-sm font-semibold">Numéro Du Titre De Séjour</label>
              <input
                type="text"
                name="numberID"
                id="numberID"
                placeholder='Saisissez votre numéro du titre de séjour'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="date" className="text-sm font-semibold">Date De Validité</label>
              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Marital Status and Spouse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="civilite" className="text-sm font-semibold">Civilité</label>
            <select
              name="civilite"
              id="civilite"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="votre Civilité">Votre Civilité</option>
              <option value="Monsieur">Monsieur</option>
              <option value="Madame">Madame</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="situation" className="text-sm font-semibold">Situation Matrimoniale</label>
            <select
              name="situation"
              id="situation"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="votre situation matrimoniale">Votre Situation Matrimoniale</option>
              <option value="Celibataire">Célibataire</option>
              <option value="Mariee">Mariée</option>
              <option value="Divorce">Divorcée</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="spouse" className="text-sm font-semibold">Nom Et Prénom De L&apos;époux (se)</label>
            <input
              type="text"
              name="spouse"
              id="spouse"
              placeholder='Nom Et Prénom De L&apos;époux (se)'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button title='Annuler' structure='px-6 py-3 text-white uppercase border-2 border-green-700 hover:bg-green-700' />
          <Button title='Continuer' structure='px-6 py-3 text-white uppercase bg-green-700' />
        </div>
      </form>
    </div>
  )
}

export default Step1
