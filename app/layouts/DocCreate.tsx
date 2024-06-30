import React from 'react'
import DocCreation from '../components/DocCreation'

const title1 = 'Choisir un modèle'
const title2 = 'Remplir le document'
const title3 = 'Avocats en option'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/choisir_model_qxnvsl.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/remplir_le_document_xklo0a.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/advocats_en_option_gkeapb.svg'

const description1 = 'Dans le grand soucis de vous facilité la conception de votre document nous vous proposons des modelés de document. Choisissez votre modèle.'
const description2 = 'Vous devez uniquement remplir les informations. Des questions simples et claires vous seront posées pour que vous sachez quelles informations sont demandées dans chaque champ.'
const description3 = 'Dans le grand soucis de vous facilité la conception de votre document nous vous proposons des modelés de document. Choisissez votre modèle.'

const DocCreate = () => {
  return (
    <div className='w-7/12 m-auto bg-white py-24'>
        <div>
            <div className='text-center text-black uppercase text-4xl font-bold py-2'>
                <h2>creation de document</h2>
            </div>
            <div className='text-black text-center text-base py-4'>
                <p>Nous vous presentons comment creer vos document juridique ici.</p>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-3 px-6'>
            <div>
                <DocCreation  title={title1} description={description1} image={image1}/>
            </div>
            <div>
                <DocCreation  title={title2} description={description2} image={image2}/>
            </div>
            <div>
                <DocCreation  title={title3} description={description3} image={image3}/>
            </div>
        </div>
    </div>
  )
}

export default DocCreate