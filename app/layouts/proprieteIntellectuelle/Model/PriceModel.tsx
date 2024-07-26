import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const PriceLogo = () => {
  return (
    <div className='py-6 bg-gray-50'>
        <div className='px-42 w-4/12 m-auto'>
            <div className='relative text-center border-4 h-[720px] px-6 border-green-700 rounded-md'>
                <Heads title='Enregistrement' headcust='text-lg' cust='hidden' structure='' />
                <Heads title='Frais officiels à partir de' headcust='text-lg' cust='hidden' structure=' py-2' />
                <Heads title='XXX $ | 95.000 FCFA ' headcust='text-xl text-green-700 font-bold' cust='hidden' structure='' />
                <p>+ frais professionnels</p>
                <Heads title='Vous obtenez:' headcust='text-lg' cust='hidden' structure='' />
                <Heads title='Consultation juridique'  headcust='text-lg' cust='text-2lg'
                description='Conseils juridiques personnalisés sur la viabilité de votre demande de d’enregistrement de dessin et modèle auprès de l&apos;OAPI  et les garanties de succès de son enregistrement. ' structure='' />
                <Heads title='Dépôt'  headcust='text-lg' cust='text-2lg'
                description='  Préparation et dépôt de votre demande d&apos;enregistrement de dessin et modèle industriel.' structure='' />
                <Heads title='Suivi'  headcust='text-lg' cust='text-2lg'
                 description=' ⁠Suivi du dossier et correction d&apos;erreurs matérielles qui incombent au mandataire' structure='' />
                <Heads title='Maintenance'  headcust='text-lg' cust='text-2lg'
                description='Maintenance des droits par la veille et les renouvellements successifs' structure='' />
                <Button title='commencer' structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 absolute bottom-0 mb-4 transform -translate-x-1/2 text-white font-bold text-xl' />
            </div>
        </div>

    </div>
  )
}

export default PriceLogo