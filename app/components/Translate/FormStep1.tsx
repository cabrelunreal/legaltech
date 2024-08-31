'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../components/proprieteIntellectuelle/General/Button';

const FormStep1 = () => {
    const [exigences, setExigences] = useState('');
    const [doctype, setDoctype] = useState('');
    const [pageCount, setPageCount] = useState<number | ''>('');
    const [file, setFile] = useState<File | null>(null);
    const [specialization, setSpecialization] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState<string>('Anglais');
    const [targetLanguage, setTargetLanguage] = useState<string>('Francais');
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSourceLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setSourceLanguage(selectedLanguage);
        setTargetLanguage(selectedLanguage === 'Anglais' ? 'Francais' : 'Anglais');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!exigences || !doctype || pageCount === '' || !file || !specialization) {
            alert('Please fill out all required fields and upload a file.');
            return;
        }

        const formData = {
            exigences,
            doctype,
            pageCount,
            specialization,
            sourceLanguage,
            targetLanguage
        };

        // Save form data to localStorage
        localStorage.setItem('formData1', JSON.stringify(formData));

        // Convert file to Data URL and save to localStorage
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            localStorage.setItem('uploadedFile', fileReader.result as string);
            router.push('../../pages/step2'); // Navigate to the next step
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='grid w-8/12 m-auto py-8'>
                <div className='py-2'>
                    <label htmlFor="exigences" className='text-lg py-2 font-semibold'>Entrez les exigences du projet *</label><br />
                    <input 
                        type="text" 
                        className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                        name="exigences" 
                        id="exigences" 
                        placeholder='Selectionner' 
                        value={exigences} 
                        onChange={(e) => setExigences(e.target.value)} 
                        required 
                    />
                </div>
                <div className='grid md:grid-cols-2 gap-2 py-2'>
                    <div>
                        <label htmlFor="doctype" className='text-lg py-2 font-semibold'>Quel type de document souhaitez-vous traduire? *</label><br />
                        <input 
                            type="text" 
                            className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                            name="doctype" 
                            id="doctype" 
                            placeholder='Selectionner' 
                            value={doctype} 
                            onChange={(e) => setDoctype(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="pageCount" className='text-lg py-2 font-semibold'>Combien de pages souhaitez-vous traduire? *</label><br />
                        <input 
                            type="number" 
                            className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                            name="pageCount" 
                            id="pageCount" 
                            placeholder='0 - 50' 
                            min={0} 
                            max={50} 
                            value={pageCount} 
                            onChange={(e) => setPageCount(e.target.valueAsNumber)} 
                            required 
                        />
                    </div>
                </div>
                <div className='py-2'>
                    <label htmlFor="file" className='text-lg py-2 font-semibold'>Téléchargez vos fichiers *</label><br />
                    <input 
                        type="file" 
                        className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                        name="file" 
                        id="file" 
                        onChange={handleFileChange} 
                        required 
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor="specialization" className='text-lg py-2 font-semibold'>Définir la spécialisation pour ce type de travail *</label><br />
                    <input 
                        type="text" 
                        className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                        name="specialization" 
                        id="specialization" 
                        placeholder='Selectionner' 
                        value={specialization} 
                        onChange={(e) => setSpecialization(e.target.value)} 
                        required 
                    />
                </div>
                <div className='grid md:grid-cols-2 gap-2 py-3'>
                    <div>
                        <label htmlFor="sourceLanguage" className='text-lg py-2 font-semibold'>Langue source *</label><br />
                        <select 
                            name="sourceLanguage" 
                            className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' 
                            id="sourceLanguage" 
                            value={sourceLanguage} 
                            onChange={handleSourceLanguageChange} 
                            required
                        >
                            <option value="Anglais">Anglais</option>
                            <option value="Francais">Francais</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="targetLanguage" className='text-lg py-2 font-semibold'>Langue cible *</label><br />
                        <select 
                            name="targetLanguage" 
                            className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' 
                            id="targetLanguage" 
                            value={targetLanguage} 
                            required
                        >
                            <option value={targetLanguage}>{targetLanguage}</option>
                        </select>
                    </div>
                </div>
                <div className='md:w-4/12 mx-auto grid md:grid-cols-2 gap-4'>
                    <div>
                        <Button title='annuler' structure='border w-full py-3 border-green-500 rounded-sm hover:bg-green-700 hover:text-white font-semibold uppercase' />
                    </div>
                    <div>
                        <Button 
                            title='continuer'  
                            structure='border w-full py-3 border-green-700 rounded-sm  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormStep1;
