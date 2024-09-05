'use client'
import React, { useState, useEffect } from 'react';
import Button from '../proprieteIntellectuelle/General/Button';
import { useRouter } from 'next/navigation';

const FormStep2 = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [societe, setSociete] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Load data from localStorage when component mounts
        const formData1 = localStorage.getItem('formData1');
        if (formData1) {
            const parsedData = JSON.parse(formData1);
            setNom(parsedData.nom || '');
            setPrenom(parsedData.prenom || '');
            setSociete(parsedData.societe || '');
            setTel(parsedData.tel || '');
            setEmail(parsedData.email || '');
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!nom || !prenom || !tel || !email) {
            alert('Please fill out all required fields.');
            return;
        }

        const formData2 = {
            nom,
            prenom,
            societe,
            tel,
            email
        };

        localStorage.setItem('formData2', JSON.stringify(formData2));

        router.push('../../pages/step3'); 
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='grid w-full m-auto'>
                <div className='grid md:grid-cols-2 gap-2 py-4'>
                    <div>
                        <label htmlFor="nom" className='text-lg py-3'>Nom: *</label><br />
                        <input 
                            type="text" 
                            className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                            name="nom" 
                            id="nom" 
                            placeholder='Nom' 
                            value={nom} 
                            onChange={(e) => setNom(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="prenom" className='text-lg py-3'>Prénoms: *</label><br />
                        <input 
                            type="text" 
                            className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                            name="prenom" 
                            id="prenom" 
                            placeholder='Prénoms' 
                            value={prenom} 
                            onChange={(e) => setPrenom(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-2 py-3'>
                    <div>
                        <label htmlFor="tel" className='text-lg py-3'>Téléphone: *</label><br />
                        <input 
                            type="tel" 
                            className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                            name="tel" 
                            id="tel" 
                            placeholder='Téléphone' 
                            value={tel} 
                            onChange={(e) => setTel(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='text-lg py-3'>Email: *</label><br />
                        <input 
                            type="email" 
                            className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                            name="email" 
                            id="email" 
                            placeholder='Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className='py-3'>
                    <label htmlFor="societe" className='text-lg py-3'>Société </label><br />
                    <input 
                        type="text" 
                        className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                        name="societe" 
                        id="societe" 
                        placeholder='Société' 
                        value={societe} 
                        onChange={(e) => setSociete(e.target.value)} 
                    />
                </div>
                <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4 py-4'>
                    <div>
                        <Button 
                            title='annuler' 
                            structure='border w-full hover:border-none py-3 border-green-700 hover:bg-green-700 hover:text-white font-semibold uppercase' 
                        />
                    </div>
                    <div>
                        <Button 
                            title='continuer' 
                            structure='border w-full py-3 border-green-700  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormStep2;
