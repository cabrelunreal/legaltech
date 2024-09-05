'use client';
import React, { useEffect, useState } from 'react';
import Button from '../proprieteIntellectuelle/General/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const FormStep3 = () => {
    const router = useRouter();

    const [summaryData, setSummaryData] = useState<any>({});
    const [totalCost, setTotalCost] = useState<number | null>(null);
    const [agreeToPay, setAgreeToPay] = useState<boolean>(false);

    useEffect(() => {
        // Retrieve form data from localStorage
        const formData1 = JSON.parse(localStorage.getItem('formData1') || '{}');
        const formData2 = JSON.parse(localStorage.getItem('formData2') || '{}');

        if (formData1 && formData2) {
            setSummaryData({
                ...formData1,
                ...formData2
            });

            // Calculate cost if page count is between 1 and 10
            if (formData1.pageCount >= 1 && formData1.pageCount <= 50) {
                setTotalCost(300 * formData1.pageCount);
            } else {
                setTotalCost(null);
            }
        } else {
            console.error('Form data not found in localStorage');
        }
    }, []);

    const handlePayment = () => {
        if (agreeToPay && totalCost !== null) {
            router.push('/payment'); // Redirect to payment page
        } else {
            alert('Please agree to the payment terms.');
        }
    };

    const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreeToPay(e.target.checked);
    };

    return (
        <div>
            <div className='py-8'>
                <div className='grid w-8/12 m-auto'>
                <div className='py-8 bg-gray-50 rounded-sm'>
                        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Résumé de votre demande</h2>
                        <div className='grid md:grid-cols-2 gap-8 px-6'>
                            <div className='bg-white p-6 rounded-sm shadow-sm'>
                                <h3 className='text-xl font-semibold mb-4 text-gray-700 border-b pb-2'>Informations sur le projet</h3>
                                <div className='space-y-2'>
                                    <p><span className='font-medium text-gray-600'>Exigences:</span> {summaryData.exigences || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Type de document:</span> {summaryData.doctype || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Nombre de pages:</span> {summaryData.pageCount || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Spécialisation:</span> {summaryData.specialization || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Langue source:</span> {summaryData.sourceLanguage || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Langue cible:</span> {summaryData.targetLanguage || 'Non fourni'}</p>
                                </div>
                            </div>
                            <div className='bg-white p-6 rounded-sm shadow-sm'>
                                <h3 className='text-xl font-semibold mb-4 text-gray-700 border-b pb-2'>Informations personnelles</h3>
                                <div className='space-y-2'>
                                    <p><span className='font-medium text-gray-600'>Nom:</span> {summaryData.nom || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Prénom:</span> {summaryData.prenom || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Société:</span> {summaryData.societe || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Téléphone:</span> {summaryData.tel || 'Non fourni'}</p>
                                    <p><span className='font-medium text-gray-600'>Email:</span> {summaryData.email || 'Non fourni'}</p>
                                </div>
                            </div>
                        </div>
                        {totalCost !== null && (
                            <div className='mt-8 bg-white p-6 rounded-sm shadow-sm mx-6'>
                                <p className='text-xl font-semibold text-gray-800 mb-4'>
                                    Votre document sera traduit pour un total de <span className='text-green-600'>{totalCost} €</span>.
                                </p>
                                <p className='text-lg text-gray-700 mb-4'>Veuillez confirmer votre paiement.</p>
                                <div className='flex'>
                                    <div>
                                        <Image
                                            src="https://res.cloudinary.com/dedakscgk/image/upload/v1725544509/mtn_aqdukh.png"
                                            alt=""
                                            width={200}
                                            height={100}
                                            className=""
                                        ></Image>
                                    </div>
                                    <div>
                                        <Image
                                            src="https://res.cloudinary.com/dedakscgk/image/upload/v1725544509/orange_f25h5t.png"
                                            alt=""
                                            width={200}
                                            height={100}
                                            className=""
                                        ></Image>
                                    </div>
                                </div>
                                <div className='flex items-center py-2'>
                                    <input 
                                        type="checkbox" 
                                        id="agreeToPay" 
                                        className='mr-3 h-5 w-5 text-green-600' 
                                        checked={agreeToPay} 
                                        onChange={handleAgreeChange} 
                                    />
                                    <label htmlFor="agreeToPay" className='text-lg text-gray-700'>
                                        J&apos;accepte de payer ce montant.
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4 py-4'>
                            <div>
                                <Button 
                                    title='Modifier' 
                                    structure='border rounded-md w-full py-3 border-green-700 hover:bg-green-700 hover:text-white font-semibold uppercase' 
                                    onClick={() => router.push('/step1')} 
                                />
                            </div>
                            <div>
                                <Button 
                                    title='Confirmer et payer' 
                                    structure='border rounded-md w-full py-3 border-green-700 bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' 
                                    onClick={handlePayment} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormStep3;
