import React from 'react'
import Button from '../proprieteIntellectuelle/General/Button'

const Step2 = () => {
  return (
    <div className="w-full max-w-4xl bg-gray-50 rounded-md mx-auto p-4">
        <form className="space-y-6">
        {/* Personal Information */}
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
            <label htmlFor="surname" className="text-sm font-semibold">Nom commerciale</label>
            <input
              type="text"
              name="nom_commerciale"
              id="nom_commerciale"
              placeholder='Saisissez votre nom commerciale'
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-semibold">Activite principale</label>
            <input
                type="text"
                name="numberID"
                id="numberID"
                placeholder='activite principale'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col flex-1">
              <label htmlFor="numberID" className="text-sm font-semibold">Adresse</label>
              <input
                type="text"
                name="numberID"
                id="numberID"
                placeholder='Saisissez votre adresse reele'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
           </div>
        </div>

        {/* Marital Status and Spouse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="civilite" className="text-sm font-semibold">Boite postal</label>
            <input
                type="text"
                name="pobox"
                id="pobox"
                placeholder='renseignez votre boite postal'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="origin" className="text-sm font-semibold">Origine</label>
            <input
                type="text"
                name="origin"
                id="origin"
                placeholder='quel est l&apos;orgine de structure commercialle'
                className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center flex-col md:flex-row gap-4">
          <Button title='retour' structure='px-6 py-3 text-green-700 hover:text-white uppercase border border-green-700 hover:bg-green-700' />
          <Button title='suivant' structure='px-6 py-3 text-white uppercase hover:bg-green-800 border-green-700 bg-green-700' />
        </div>
      </form>
    </div>
  )
}

export default Step2