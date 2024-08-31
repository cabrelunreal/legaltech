'use client';
import React, { useEffect, useState } from 'react';
import Button from '../proprieteIntellectuelle/General/Button';
import { useRouter } from 'next/navigation';

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
                    <div className='py-4'>
                        <h2 className='text-lg font-semibold'>Résumé de votre demande</h2>
                        <div>
                            <h3 className='text-md font-semibold py-2'>Informations sur le projet:</h3>
                            <p><strong>Exigences:</strong> {summaryData.exigences || 'Non fourni'}</p>
                            <p><strong>Type de document:</strong> {summaryData.doctype || 'Non fourni'}</p>
                            <p><strong>Nombre de pages:</strong> {summaryData.pageCount || 'Non fourni'}</p>
                            <p><strong>Spécialisation:</strong> {summaryData.specialization || 'Non fourni'}</p>
                            <p><strong>Langue source:</strong> {summaryData.sourceLanguage || 'Non fourni'}</p>
                            <p><strong>Langue cible:</strong> {summaryData.targetLanguage || 'Non fourni'}</p>
                        </div>
                        <div>
                            <h3 className='text-md font-semibold py-2'>Informations personnelles:</h3>
                            <p><strong>Nom:</strong> {summaryData.nom || 'Non fourni'}</p>
                            <p><strong>Prénom:</strong> {summaryData.prenom || 'Non fourni'}</p>
                            <p><strong>Société:</strong> {summaryData.societe || 'Non fourni'}</p>
                            <p><strong>Téléphone:</strong> {summaryData.tel || 'Non fourni'}</p>
                            <p><strong>Email:</strong> {summaryData.email || 'Non fourni'}</p>
                        </div>
                        {totalCost !== null && (
                            <div className='py-4'>
                                <p className='text-lg font-semibold'>
                                    Votre document sera traduit pour un total de {totalCost} €.
                                    Veuillez confirmer votre paiement.
                                </p>
                                <div className='flex py-4'>
                                    <input 
                                        type="checkbox" 
                                        id="agreeToPay" 
                                        className='mr-2' 
                                        checked={agreeToPay} 
                                        onChange={handleAgreeChange} 
                                    />
                                    <label htmlFor="agreeToPay" className='text-lg'>
                                        J&apos;accepte de payer ce montant.
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className='md:w-5/12 mx-auto grid md:grid-cols-2 gap-4 py-4'>
                            <div>
                                <Button 
                                    title='Modifier' 
                                    structure='border w-full py-3 border-green-700 hover:bg-green-700 hover:text-white font-semibold uppercase' 
                                    onClick={() => router.push('/step1')} 
                                />
                            </div>
                            <div>
                                <Button 
                                    title='Confirmer et payer' 
                                    structure='border w-full py-3 border-green-700 bg-green-700 text-white hover:bg-green-900 font-semibold uppercase' 
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
