import DocCreation from '@/app/components/DocCreation'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import Why from '@/app/layouts/Why'
import React from 'react'


const title1 = 'Entreprises'
const title2 = 'Startups'
const title3 = 'Particuliers'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/choisir_model_qxnvsl.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/remplir_le_document_xklo0a.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/advocats_en_option_gkeapb.svg'

const description1 = 'Dans le grand soucis de vous facilité la conception de votre document nous vous proposons des modelés de document. Choisissez votre modèle.'
const description2 = 'Vous devez uniquement remplir les informations. Des questions simples et claires vous seront posées pour que vous sachez quelles informations sont demandées dans chaque champ.'
const description3 = 'Dans le grand soucis de vous facilité la conception de votre document nous vous proposons des modelés de document. Choisissez votre modèle.'


const WhyUS = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer
                custom='justify-center text-center'
                title='Pourquoi nous choisir ?'
                description='Traduction de documents juridiques, administratifs et autres documents techniques.'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721963620/Screen_Shot_2024-06-29_at_14.51.43_1_1_lqqrla.png'
            />
        </div>
        <div className='py-12'>
            <Heads
                title='Pourquoi Choisir Tribunejustice'
                cust='text-2xl'
                description='Tribunejustice est la première legaltech en Afrique qui offre des services juridiques et de l&apos;information juridique sur le droit. Nous mettons à disposition des utilisateurs des outils technologiques et des expert pour accompagner nos clients dans leurs démarches juridiques tout en garantissant un meilleur suivi de leurs activités.'
                structure='text-center w-8/12 mx-auto'
            /> 
            <p className='text-center w-8/12 mx-auto'>Nos exigences en termes de qualité et d&apos;apport en nouvelles technologies font de tribunejustice une plateforme de mise en relation de référence en Afrique et dans le reste du monde.</p> 
        </div>

        <div className='pb-12'>
            <Why title='Notre approche' />
        </div>
        
        <div>
            <div className='w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12 md:py-14'>
                <div className='py-3 px-8'>
                    <div className='text-center text-black uppercase text-lg md:text-3xl font-semibold py-0 md:py-2'>
                        <h2>Qui a besoin de tribunejustice?</h2>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-center items-center'>
                        <DocCreation 
                            title={title1} 
                            description={description1} 
                            image={image1}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <DocCreation 
                            title={title2} 
                            description={description2} 
                            image={image2}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <DocCreation 
                            title={title3} 
                            description={description3} 
                            image={image3}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='md:px-0 px-8'>
            <div>
                <Heads
                    title='NOTRE EQUIPE'
                    description='Pour une collaboration plus grande et plus fluide avec vous nous offrons la possibilité d&apos;adresser un message à nos équipes.'
                    structure='text-center'
                />
                <div className='md:w-6/12 grid md:grid-cols-3 gap-8 m-auto py-6'>
                    <div className='border rounded-sm text-center'>
                        <div></div>
                        <div className='text-xl font-semibold py-2'><h2>Kuitchoua Badjeu</h2></div>
                        <div className='bg-green-700 text-white py-8 text-lg'><p>Tribunejustice Founder</p></div>
                    </div>
                    <div className='border rounded-sm text-center'>
                        <div></div>
                        <div className='text-xl font-semibold py-2'><h2>Thierry Graziani</h2></div>
                        <div className='bg-green-700 text-white py-4 text-lg'><p>Business Communication Manager</p></div>
                    </div>
                    <div  className='border rounded-sm text-center'>  
                        <div></div>
                        <div className='text-xl font-semibold py-2'><h2>Catherine BAYA</h2></div>
                        <div className='bg-green-700 text-white py-4 text-lg'><p>IP Lawyer, AOIP / OAPI Lisenced</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Contact />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default WhyUS