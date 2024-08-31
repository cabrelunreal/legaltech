// pages/preview.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Preview = () => {
    const [fileData, setFileData] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter(); // Correctly use the hook

    useEffect(() => {
        const uploadedFile = localStorage.getItem('uploadedFile');
        if (uploadedFile) {
            setFileData(uploadedFile);
        } else {
            if (pathname !== '/formstep1') {
                router.push('/formstep1'); // Use router.push for navigation
            }
        }
    }, [pathname, router]);

    if (!fileData) {
        return <p>Loading...</p>;
    }

    const handleSubmit = () => {
        router.push('../../pages/step2'); // Correctly navigate to the next step
    };

    return (
        <div className='w-8/12 m-auto py-8'>
            <h2 className='text-2xl font-semibold mb-4'>Document Preview</h2>
            <div className='border p-4 rounded-md'>
                {fileData.startsWith('data:image/') ? (
                    <img src={fileData} alt="Uploaded document preview" className='max-w-full' />
                ) : (
                    <iframe 
                        src={fileData} 
                        className='w-full h-96 border-none' 
                        title="Uploaded document preview"
                    ></iframe>
                )}
            </div>
            <div className='mt-4'>
                <button 
                    className='border w-full py-3 border-green-700 rounded-sm  bg-green-700 text-white hover:bg-green-900 font-semibold uppercase'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Preview;
