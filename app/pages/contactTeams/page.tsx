'use client';
import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome';
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader';
import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Header from '@/app/components/proprieteIntellectuelle/General/Header';
import Footer from '@/app/layouts/footer';
import React from 'react';
import FAQ from '@/app/components/Faq';
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall';
import { useRouter } from 'next/navigation';

const ContactTeams = () => {

    const router = useRouter();
    
    const onclickEnterprise = (path: string) => {
      router.push(path);
     };
    const faqData = [
        {
            question: "Qu'est-ce que la LegalTech et à quoi sert-elle ?",
            answer: "La LegalTech, contraction de 'legal technology', désigne l'ensemble des technologies utilisées pour rendre les services juridiques plus accessibles, plus efficaces et plus abordables. Ces outils peuvent automatiser des tâches, faciliter la recherche juridique, améliorer la collaboration entre les avocats et leurs clients, etc.",
        },
        {
            question: "Quels sont les avantages de la LegalTech pour les particuliers ?",
            answer: "La LegalTech permet aux particuliers de : \n* Bénéficier de conseils juridiques en ligne à moindre coût. \n* Gérer eux-mêmes certaines démarches juridiques simples (rédaction de contrats, rédaction de testament, etc.). \n* Avoir accès à des informations juridiques claires et précises.",
        },
        {
            question: "Comment choisir un outil LegalTech ?",
            answer: "Pour choisir un outil LegalTech adapté à vos besoins, il est important de : \n* Identifier précisément les problèmes juridiques que vous souhaitez résoudre. \n* Comparer les fonctionnalités des différents outils disponibles. \n* Vérifier la fiabilité et la sécurité des données. \n* Tenir compte de votre budget.",
        },
        {
            question: "Comment la LegalTech peut-elle améliorer mon activité ?",
            answer: "La LegalTech peut vous aider à : \n* Gagner du temps sur les tâches administratives répétitives. \n* Améliorer la qualité de vos prestations. \n* Renforcer votre relation avec vos clients. \n* Vous différencier de la concurrence.",
        },
        {
            question: "Quels sont les risques liés à l'utilisation de la LegalTech ?",
            answer: "Les principaux risques associés à la LegalTech sont : \n* La dépendance aux outils numériques. \n* Les problèmes de sécurité des données. \n* La perte d'emploi pour certaines tâches automatisables.",
        },
        {
            question: "Comment former mes collaborateurs à la LegalTech ?",
            answer: "Pour former vos collaborateurs à la LegalTech, vous pouvez : \n* Organiser des formations internes. \n* Encourager la participation à des événements professionnels. \n* Soutenir la certification de vos collaborateurs.",
        },
        {
            question: "Pourquoi les entreprises devraient-elles s'intéresser à la LegalTech ?",
            answer: "La LegalTech permet aux entreprises de : \n* Réduire leurs coûts juridiques. \n* Améliorer la gestion de leurs contrats. \n* Mieux se conformer à la réglementation. \n* Accélérer leur processus de prise de décision.",
        },
        {
            question: "Comment intégrer la LegalTech dans ma stratégie juridique ?",
            answer: "Pour intégrer la LegalTech dans votre stratégie juridique, vous pouvez : \n* Réaliser un audit de vos besoins. \n* Mettre en place une politique d'achat de logiciels juridiques. \n* Former vos équipes juridiques. \n* Collaborer avec des fournisseurs de solutions LegalTech.",
        },
        {
            question: "Quels sont les défis liés à l'implémentation de la LegalTech ?",
            answer: "Les principaux défis liés à l'implémentation de la LegalTech sont : \n* La résistance au changement. \n* Les coûts d'investissement. \n* La nécessité d'adapter les processus existants.",
        },
    ];

    return (
        <div>
            <div>
                <Header />
            </div>

            <div>
                <WelcomeContainer 
                    title='CONTACTEZ NOS EXPERTS'
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1724583056/WhatsApp_Image_2024-08-21_at_14.36.08_d09a79c7_a1mrnk.jpg'
                    description='Une fois le besoin de l’utilisateur identifié, tribunejustice offre la possibilité d’une mise en relation avec des experts.'
                    custom='justify-center text-center'
                    custButton=''
                />
            </div>

            <div className='md:w-9/12 m-auto md:py-12 py-8 px-6 md:px-0'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='md:p-12 p-6 bg-gray-100 rounded-sm'>
                        <h2 className='py-2 md:text-2xl font-semibold'>Service Client</h2>
                        <p className='py-2 md:text-lg font-semibold'>(XXX) XXX XXX XXX</p>
                        <p className='py-1 md:text-lg'>Lun-Ven : 8h – 19h GMT+1</p>
                        <p className='py-1 md:text-lg'>Weekends : 8h – 13h GMT+1</p>
                        <Button title='Discuter avec nous' onClick={() => onclickEnterprise('https://wa.me/672442800')} structure='bg-green-700 text-white px-8 text-lg font-semibold hover:bg-green-800 rounded-md my-4 py-3' />
                    </div>
                    <div className='md:p-12 p-6 bg-gray-100 rounded-sm'>
                        <h2 className='py-2 md:text-2xl font-semibold'>Ventes</h2>
                        <p className='py-2 md:text-lg font-semibold'>(XXX) XXX XXX XXX</p>
                        <p className='py-1 md:text-lg'>Lun-Ven : 8h – 19h GMT+1</p>
                        <p className='py-1 md:text-lg'>Weekends : 8h – 13h GMT+1</p>
                        <Button title='Discuter avec nous' onClick={() => onclickEnterprise('https://wa.me/672442800')} structure='bg-green-700 text-white px-8 text-lg font-semibold hover:bg-green-800 rounded-md my-4 py-3' />
                    </div>
                </div>
            </div>

            <div className="flex bg-gray-100">
                <FAQ questionsAnswers={faqData} />
            </div>

            <div>
                <QuickCall />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactTeams;
