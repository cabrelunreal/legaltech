'use client'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Footer from '@/app/layouts/footer'
import Categories from '@/app/layouts/proprieteIntellectuelle/Home/Categories'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import Help from '@/app/layouts/proprieteIntellectuelle/Home/Help'
import Welcome from '@/app/layouts/proprieteIntellectuelle/Home/Welcome'
import React from 'react'
import FAQ from '@/app/components/Faq'

const HomePropriete = () => {
    
    const faqData = [
        {
          question: "Qu'est-ce que la Propriete Intellectuelle, et à quoi sert-elle ?",
          answer: "La LegalTech, contraction de 'legal technology', désigne l'ensemble des technologies utilisées pour rendre les services juridiques plus accessibles, plus efficaces et plus abordables. Ces outils peuvent automatiser des tâches, faciliter la recherche juridique, améliorer la collaboration entre les avocats et leurs clients, etc.",
        },
        {
          question: "Quels sont les avantages de la Propriete Intellectuelle pour les startupeurs ?",
          answer: "La LegalTech permet aux particuliers de : \n* Bénéficier de conseils juridiques en ligne à moindre coût. \n* Gérer eux-mêmes certaines démarches juridiques simples (rédaction de contrats, rédaction de testament, etc.). \n* Avoir accès à des informations juridiques claires et précises.",
        },
        {
          question: "Quel sont les differents aspets de la Propriete Intellectuelle?",
          answer: "Pour choisir un outil LegalTech adapté à vos besoins, il est important de : \n* Identifier précisément les problèmes juridiques que vous souhaitez résoudre. \n* Comparer les fonctionnalités des différents outils disponibles. \n* Vérifier la fiabilité et la sécurité des données. \n* Tenir compte de votre budget.",
        },
        {
          question: "Comment la PI peut-elle améliorer mon activité ?",
          answer: "La LegalTech peut vous aider à : \n* Gagner du temps sur les tâches administratives répétitives. \n* Améliorer la qualité de vos prestations. \n* Renforcer votre relation avec vos clients. \n* Vous différencier de la concurrence.",
        }
      ];
  return (
    <div className=''>
        <div>
            <Header />
        </div>
        <div>
            <Welcome />
        </div>
        <div>
            <Categories />
        </div>
        <div>
            <Help />
        </div>
        <div className="flex bg-gray-100">
            <FAQ questionsAnswers={faqData} />
        </div>
        <div>
            <Contact />
        </div>
        <div className='bg-green-500 text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default HomePropriete