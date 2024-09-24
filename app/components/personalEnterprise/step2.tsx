import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'

const Step2 = () => {
  return (
    <div className="w-full max-w-4xl bg-gray-50 rounded-md mx-auto p-4">
        <form className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">Enseigne</label>
            <input
              type="text"
              name="enseigne"
              id="enseigne"
              placeholder='Saisissez votre enseigne'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nom_commercial" className="text-sm font-semibold">Nom commercial</label>
            <input
              type="text"
              name="nom_commercial"
              id="nom_commercial"
              placeholder='Saisissez votre nom commercial'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="activite" className="text-sm font-semibold">Activité principale</label>
            <input
                type="text"
                name="activite"
                id="activite"
                placeholder='Activité principale'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col flex-1">
              <label htmlFor="adresse" className="text-sm font-semibold">Adresse</label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                placeholder='Saisissez votre adresse réelle'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
           </div>
        </div>

        {/* Statut et origine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="pobox" className="text-sm font-semibold">Boîte postale</label>
            <input
                type="text"
                name="pobox"
                id="pobox"
                placeholder='Renseignez votre boîte postale'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="origin" className="text-sm font-semibold">Origine</label>
            <input
                type="text"
                name="origin"
                id="origin"
                placeholder="Quelle est l'origine de la structure commerciale"
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex justify-center flex-col md:flex-row gap-4">
          <Button title='Retour' structure='px-6 py-3 text-green-700 hover:text-white uppercase border border-green-700 hover:bg-green-700' />
          <Button title='Suivant' structure='px-6 py-3 text-white uppercase hover:bg-green-800 border-green-700 bg-green-700' />
        </div>
      </form>
    </div>
  )
}

export default Step2
