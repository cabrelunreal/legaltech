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
    const [files, setFiles] = useState<File[]>([]); 
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []); 
        setFiles(prevFiles => [...prevFiles, ...selectedFiles]); 
        setFile(selectedFiles[0] || null); // Set the first selected file
    };

    const handleFileRemove = (fileToRemove: File) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove)); 
    };

    const handleSourceLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setSourceLanguage(selectedLanguage);
        if (selectedLanguage === targetLanguage) {
            setTargetLanguage(selectedLanguage === 'Anglais' ? 'Francais' : 'Anglais');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (pageCount === '' || !file || !specialization) {
            alert('Please fill out all required fields and upload a file.');
            return;
        }

        const formData = {
            doctype,
            pageCount,
            specialization,
            sourceLanguage,
            targetLanguage
        };

        
        localStorage.setItem('formData1', JSON.stringify(formData));

        
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            localStorage.setItem('uploadedFile', fileReader.result as string);
            router.push('../../pages/step2');
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='grid md:w-full m-auto py-8'>
                <div className='grid md:grid-cols-2 gap-2 py-2'>
                    <div>
                        <label htmlFor="doctype" className='text-lg py-2'>Type de document? </label><br />
                        <input 
                            type="text" 
                            className='py-3 px-2 rounded-sm border w-full focus:outline-none focus:border-green-500' 
                            name="doctype" 
                            id="doctype" 
                            placeholder='(document administratif etc)' 
                            value={doctype} 
                            onChange={(e) => setDoctype(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="pageCount" className='text-lg py-2'>Nombres de pages? *</label><br />
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
                <div className='grid md:grid-cols-2 gap-2 py-3'>
                    <div>
                        <label htmlFor="sourceLanguage" className='text-lg py-2'>Langue source *</label><br />
                        <select 
                            name="sourceLanguage" 
                            className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' 
                            id="sourceLanguage" 
                            value={sourceLanguage} 
                            onChange={handleSourceLanguageChange} 
                            required
                        >
                            {['Anglais', 'Francais', 'Deutch', 'Espagnol', 'Mandarin'].map(lang => (
                                <option key={lang} value={lang} disabled={lang === targetLanguage}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="targetLanguage" className='text-lg py-2'>Langue cible *</label><br />
                        <select 
                            name="targetLanguage" 
                            className='py-3 px-2 w-full rounded-sm border focus:outline-none focus:border-green-500' 
                            id="targetLanguage" 
                            value={targetLanguage} 
                            onChange={(e) => setTargetLanguage(e.target.value)} 
                            required
                        >
                            {['Anglais', 'Francais', 'Deutch', 'Espagnol', 'Mandarin'].map(lang => (
                                <option key={lang} value={lang} disabled={lang === sourceLanguage}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='py-2'>
                    <label htmlFor="file" className='text-lg py-2'>Téléversez vos fichiers *</label><br />
                    <input 
                        type="file" 
                        className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                        name="file" 
                        id="file" 
                        onChange={handleFileChange} 
                        required 
                        multiple // Allow multiple file uploads
                    />
                </div>
                {files.length > 0 && (
                    <div className='py-2'>
                        <h3 className='text-lg py-2'>Fichiers téléchargés:</h3>
                        <ul>
                            {files.map((file, index) => (
                                <li key={index} className='flex justify-between items-center'>
                                    <span>{file.name}</span>
                                    <button 
                                        onClick={() => handleFileRemove(file)} 
                                        className='text-red-500 hover:underline'
                                    >
                                        Supprimer
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='py-2'>
                    <label htmlFor="specialization" className='text-lg py-2'>Commentaires</label><br />
                    <textarea 
                        className='py-3 px-2 rounded-sm w-full border focus:outline-none focus:border-green-500' 
                        name="specialization" 
                        id="specialization" 
                        placeholder='Laissez des specifications par rapport a votre besoin' 
                        value={specialization} 
                        onChange={(e) => setSpecialization(e.target.value)} 
                        required 
                    ></textarea>
                </div>
                <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4'>
                    <div>
                        <Button 
                            title='annuler' 
                            structure='border w-full hover:border-none py-3 px-2 border-green-500 rounded-sm hover:bg-green-700 hover:text-white font-semibold uppercase' 
                        />
                    </div>
                    <div>
                        <Button 
                            title='continuer'  
                            structure='border w-full px-2 py-3 border-green-700 rounded-sm  bg-green-700 text-white hover:bg-green-900 uppercase' 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormStep1;
