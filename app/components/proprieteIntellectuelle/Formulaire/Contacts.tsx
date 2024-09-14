import React from 'react';
import Button from '../General/Button';
interface typeprops{
  type1: string;
  type2: string;
}

const Contacts:React.FC<typeprops> = ({type1, type2}) => {
  return (
    <div className='w-full py-8'>
      <div className='w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 m-auto'>
        <form className='w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='w-full'>
              <label className='block font-bold mb-1'>Type * :</label>
              <select name="Deposant" id="deposant" className='w-full rounded-sm bg-white text-black py-3 px-4 focus:outline-none'>
                <option value="">Sélectionner le type de votre demande</option>
                <option value="">{type1}</option>
                <option value="">{type2}</option>
              </select>

              <label className='block font-bold mt-4 mb-1'>Dénomination / Nom complet * :</label>
              <input type="text" className='w-full rounded-sm bg-white py-3 px-4 focus:outline-none' name="nom" id="nom" placeholder='Dénomination(s) sociale(s) / Nom(s) et prénom(s)' />

              <label className='block font-bold mt-4 mb-1'>N° de téléphone * :</label>
              <input type="tel" name="Numero de telephone" className='w-full rounded-sm bg-white py-3 px-4 focus:outline-none' id="tel" placeholder='Numéro de téléphone' />
            </div>

            <div>
              <label className='block font-bold mb-1'>Déposant * :</label>
              <select name="Deposant" id="deposant" className='w-full rounded-sm text-black bg-white py-3 px-4 focus:outline-none'>
                <option value="">Sélectionner votre type de déposant</option>
                <option value="">Personne physique</option>
                <option value="">Personne morale</option>
                <option value="">En co-propriete</option>
              </select>

              <label className='block font-bold mt-4 mb-1'>Nationalité:</label>
              <select name="Nationalite" id="nationalite" className='w-full text-black rounded-sm bg-white py-3 px-4 focus:outline-none'>
                <option value="">Sélectionner votre pays</option>
                <option value="">Benin</option>
                <option value="">Cameroon</option>
                <option value="">Congo</option>
              </select>

              <label className='block font-bold mt-4 mb-1'>Adresse électronique* :</label>
              <input type="email" name="email" className='w-full rounded-sm bg-white py-3 px-4 focus:outline-none' id="object" placeholder='Adresse email' />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-center py-4 space-y-4 sm:space-y-0 sm:space-x-4'>
            <Button title='Annuler' structure='px-6 py-3 uppercase border border-green-700 text-green-700 hover:border-none hover:text-white hover:bg-green-700 font-bold' />
            <Button title='Envoyer' structure='px-6 py-3 rounded-sm uppercase bg-green-700 text-white hover:bg-green-800 font-bold' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
