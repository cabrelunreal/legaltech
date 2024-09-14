'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Suivre la section active
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sidebar visibility

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Function to toggle sidebar

  const renderContent = () => {
    switch (activeSection) {
      case 'bookings':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">Réservations</h2>
            <h3 className="text-lg font-semibold mb-2">Réunions à venir :</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Détails</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-08-30</td>
                    <td className="px-6 py-4 whitespace-nowrap">10:00 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">Réunion avec le client A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Confirmé</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-09-02</td>
                    <td className="px-6 py-4 whitespace-nowrap">2:00 PM</td>
                    <td className="px-6 py-4 whitespace-nowrap">Entretien avec le candidat B</td>
                    <td className="px-6 py-4 whitespace-nowrap text-yellow-600">En attente</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-lg font-semibold mb-2 mt-4">Historique des Réservations :</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Détails</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-08-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">11:00 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">Réunion avec le client C</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Traité</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-08-20</td>
                    <td className="px-6 py-4 whitespace-nowrap">1:00 PM</td>
                    <td className="px-6 py-4 whitespace-nowrap">Entretien avec le candidat D</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-600">Refusé</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      case 'accountManagement':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">Gestion de Compte</h2>
            <p className="mb-4">Voici vos informations de compte :</p>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Nom :</span>
                <span>Leonce Kousse</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Email :</span>
                <span>contact@exemple.com</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Téléphone :</span>
                <span>(+237 XXX XXX XXX)</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Adresse :</span>
                <span>123 Rue Exemple, Yaoundé</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">Ajouter des détails supplémentaires :</h3>
            <form className="space-y-4 mt-2">
              <div>
                <label className="block text-sm font-medium">Nom de l&apos;entreprise :</label>
                <input type="text" placeholder="Entrez le nom de votre entreprise" className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">Numéro d&apos;identification fiscale :</label>
                <input type="text" placeholder="Entrez votre numéro d'identification fiscale" className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <button type="submit" className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition">Ajouter Détails</button>
            </form>
          </motion.div>
        );
      case 'activities':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">Historique des Activités</h2>
            <p className="mb-4">Voici un résumé de toutes vos activités sur la plateforme :</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activité</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Détails</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-01-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">Création de compte</td>
                    <td className="px-6 py-4 whitespace-nowrap">Inscription sur la plateforme</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Complété</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-02-10</td>
                    <td className="px-6 py-4 whitespace-nowrap">Achat de service</td>
                    <td className="px-6 py-4 whitespace-nowrap">Achat d&apos;un service de consultation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Complété</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-03-05</td>
                    <td className="px-6 py-4 whitespace-nowrap">Réservation de réunion</td>
                    <td className="px-6 py-4 whitespace-nowrap">Réunion avec le client A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-yellow-600">En attente</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2024-04-20</td>
                    <td className="px-6 py-4 whitespace-nowrap">Mise à jour de profil</td>
                    <td className="px-6 py-4 whitespace-nowrap">Ajout d&apos;informations supplémentaires</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Complété</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      case 'legalDocuments':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">Documents Légaux</h2>
            <p className="mb-2">Voici vos documents légaux :</p>
            <h3 className="text-lg font-semibold mb-2">Documents Déposés :</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Document Déposé 1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Traité</td>
                    <td className="px-6 py-4 whitespace-nowrap"><Link href="/document1" className="text-blue-500 hover:underline">Télécharger</Link></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Document Déposé 2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-yellow-600">En attente de traitement</td>
                    <td className="px-6 py-4 whitespace-nowrap"><Link href="/document2" className="text-blue-500 hover:underline">Télécharger</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-lg font-semibold mb-2 mt-4">Documents Reçus :</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Document Reçu 1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-600">Refusé</td>
                    <td className="px-6 py-4 whitespace-nowrap"><Link href="/document3" className="text-blue-500 hover:underline">Télécharger</Link></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Document Reçu 2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">Traité</td>
                    <td className="px-6 py-4 whitespace-nowrap"><Link href="/document4" className="text-blue-500 hover:underline">Télécharger</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">Profil</h2>
            <p>Voici les détails de votre profil :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nom : Leonce Kousse</li>
              <li>Email : contact@exemple.com</li>
              <li>Téléphone : (+237 XXX XXX XXX)</li>
            </ul>
          </motion.div>
        );
    }
  };

  return (
    <div className='w-full flex flex-row'>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center p-4">
            <button onClick={toggleSidebar} className="text-white">
                <Image src="/path/to/menu-icon.svg" alt="Menu" width={30} height={30} />
            </button>
        </div>
        <div className={`w-3/12 bg-green-800 h-screen shadow-md px-6 py-12 text-white ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
            <h1 className='text-center flex justify-center mb-6'>
                <Image
                    src="https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg"
                    alt="LOGO"
                    width={100}
                    height={80}
                    className=""
                ></Image>
            </h1>
            {/* Sidebar Links */}
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-green-700 hover:bg-green-600 transition text-white' onClick={() => setActiveSection('profile')}><Link href="">Profil</Link></p>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-green-700 hover:bg-green-600 transition text-white' onClick={() => setActiveSection('activities')}><Link href="">Activités</Link></p>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-green-700 hover:bg-green-600 transition text-white' onClick={() => setActiveSection('bookings')}><Link href="">Réservations</Link></p>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-green-700 hover:bg-green-600 transition text-white' onClick={() => setActiveSection('accountManagement')}><Link href="">Gestion de Compte</Link></p>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-green-700 hover:bg-green-600 transition text-white' onClick={() => setActiveSection('legalDocuments')}><Link href="">Documents Légaux</Link></p>
        </div>
        <div className='w-9/12 h-screen'>
            <div className='px-8 py-2 shadow-md flex justify-end items-center'>
                 <p className='px-3'>messages</p>
                 <p className='px-3'>notifications</p>
                 <Image
                    src="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/WhatsApp_Image_2024-08-27_at_19.48.25_6_vgoher.png"
                    alt="Hello"
                    width={60}
                    height={60}
                    className='rounded-full bg-green-700 text-center text-white mx-3'
                ></Image>
            </div>
            <div className='p-8'>
                {renderContent()} {/* Rendre le contenu de la section active */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard