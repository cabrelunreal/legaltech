'use client';
import React from 'react';
import Button from '../proprieteIntellectuelle/General/Button';
import { useRouter } from 'next/navigation';

interface Props {
  onclick1?: () => void;
  onclick2?: () => void;
}

const Step1: React.FC<Props> = ({ onclick1, onclick2 }) => {
  const router = useRouter();

  const onclickStop = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full md:w-9/12 bg-gray-50 rounded-md mx-auto p-4">
      <form className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez votre nom"
              className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="text-sm font-semibold">Prénoms</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Saisissez votre prénom"
              className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-semibold">Nationalité</label>
            <select
              name="country"
              id="country"
              className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Cameroon">Cameroun</option>
              <option value="Benin">Bénin</option>
              <option value="Cote Ivoire">Côte d&apos;Ivoire</option>
              <option value="Togo">Togo</option>
              <option value="Tchad">Tchad</option>
            </select>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="numberID" className="text-sm font-semibold">Numéro du titre de séjour</label>
              <input
                type="text"
                name="numberID"
                id="numberID"
                placeholder="Saisissez votre numéro du titre de séjour"
                className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="date" className="text-sm font-semibold">Date de validité</label>
              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* État civil et conjoint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="civilite" className="text-sm font-semibold">Civilité</label>
            <select
              name="civilite"
              id="civilite"
              className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="votre civilité">Votre civilité</option>
              <option value="Monsieur">Monsieur</option>
              <option value="Madame">Madame</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="situation" className="text-sm font-semibold">Situation matrimoniale</label>
            <select
              name="situation"
              id="situation"
              className="mt-1 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="votre situation matrimoniale">Votre situation matrimoniale</option>
              <option value="Celibataire">Célibataire</option>
              <option value="Mariee">Mariée</option>
              <option value="Divorce">Divorcée</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="spouse" className="text-sm font-semibold">Nom et prénom de l&apos;époux(se)</label>
            <input
              type="text"
              name="spouse"
              id="spouse"
              placeholder="Nom et prénom de l&apos;époux(se)"
              className="mt-1 p-2 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex justify-center flex-col md:flex-row gap-4">
          <Button title="Annuler" onClick={onclick1} structure="px-6 py-3 text-green-700 hover:text-white uppercase border border-green-700 hover:bg-green-700" />
          <Button title="Continuer" onClick={onclick2} structure="px-6 py-3 text-white uppercase hover:bg-green-800 border-green-700 bg-green-700" />
        </div>
      </form>
    </div>
  );
};

export default Step1;
