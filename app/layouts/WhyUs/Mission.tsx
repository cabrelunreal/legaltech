import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div>
        <div>
            <div className='md:w-9/12 m-auto grid md:flex md:flex-row py-12 px-8 md:px-24'>
                <div className='md:w-8/12 w-full justify-center'>
                    <h2 className='py-2 font-semibold text-lg md:text-2xl text-center md:text-start'>TRIBUNEJUSTICE</h2>
                    <p className='md:text-lg text-sm text-center md:text-justify'>Nous sommes pionniers dans l&apos;univers des legaltechs en Afrique, dédiés à transformer la manière dont les services juridiques sont fournis. Nous mettons à la disposition de nos utilisateurs une plateforme innovante qui combine technologie de pointe et expertise juridique pour vous accompagner dans toutes vos démarches, garantissant un suivi rigoureux de vos activités.</p>
                </div>
                <div className='md:w-4/12  md:ml-24'>
                        <Image
                            src="https://res.cloudinary.com/dedakscgk/image/upload/v1725194793/afrique-removebg-preview_kcmcrh.png"
                            alt="boke"
                            width={300}
                            height={200}
                            className=""
                        ></Image>
                </div>
            </div>
            <div className='bg-gray-50 w-full'>
                <div className='md:w-9/12 w-full justify-center m-auto flex flex-col md:flex-row py-12 px-8 md:px-24'>
                    <div className='md:w-4/12 md:pr-24'>
                        <Image
                            src="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/cibler_1_uwd3id.png"
                            alt="boke"
                            width={300}
                            height={200}
                            className=""
                        ></Image>
                    </div>
                    <div className='md:w-8/12'>
                        <h2 className='py-2 font-semibold text-lg md:text-2xl text-center md:text-start'>NOTRE MISSION</h2>
                        <p className='text-sm md:text-lg text-center md:text-justify'>Faciliter l&apos;accès à la justice pour tous. Que vous soyez une entreprise en pleine croissance, une famille cherchant à protéger ses intérêts, ou un individu déterminé à réussir, nous sommes là pour vous soutenir. Nous croyons fermement en la technologie comme levier pour simplifier le droit, et nous collaborons avec des avocats, des experts fiscaux, et des partenaires de confiance pour rendre vos démarches plus accessibles et efficaces.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission