import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div>
        <div>
            <div className='md:w-9/12 m-auto flex flex-row py-12 px-24'>
                <div className='md:w-8/12'>
                    <h2 className='py-2 font-semibold text-2xl'>TRIBUNEJUSTICE</h2>
                    <p className='text-lg'>Nous sommes pionniers dans l&apos;univers des legaltechs en Afrique, dédiés à transformer la manière dont les services juridiques sont fournis. Nous mettons à la disposition de nos utilisateurs une plateforme innovante qui combine technologie de pointe et expertise juridique pour vous accompagner dans toutes vos démarches, garantissant un suivi rigoureux de vos activités.</p>
                </div>
                <div className='md:w-4/12'>

                </div>
            </div>
            <div className='bg-gray-50 w-full'>
                <div className='md:w-9/12 m-auto flex flex-row py-12 px-24'>
                    <div className='md:w-4/12 pr-24'>
                        <Image
                            src="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/cibler_1_uwd3id.png"
                            alt="boke"
                            width={300}
                            height={200}
                            className=""
                        ></Image>
                    </div>
                    <div className='md:w-8/12'>
                        <h2 className='py-2 font-semibold text-2xl'>NOTRE MISSION</h2>
                        <p className='text-lg'>Faciliter l&apos;accès à la justice pour tous. Que vous soyez une entreprise en pleine croissance, une famille cherchant à protéger ses intérêts, ou un individu déterminé à réussir, nous sommes là pour vous soutenir. Nous croyons fermement en la technologie comme levier pour simplifier le droit, et nous collaborons avec des avocats, des experts fiscaux, et des partenaires de confiance pour rendre vos démarches plus accessibles et efficaces.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission