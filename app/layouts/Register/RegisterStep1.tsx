import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'


const RegisterStep1 = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('../../pages/dashboard')
    }
  return (
    <div className='md:px-16 md:py-24'>
        <div className='border border-gray-100 px-6 py-8 rounded-md'>
            <div>
                <div className='text-center font-semibold md:text-xl'>
                    <h2>Détails du compte</h2>
                </div>
            </div>
            <div className=''>
                <form action="" onSubmit={handleSubmit}>
                    <div className='py-2'>
                        <label htmlFor="">Adresse email *</label><br />
                        <input type="email" name="email" className='border w-full py-3 px-3 rounded-md' id="email" placeholder='Entrez votre adresse email' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Mot de passe *</label><br />
                        <input type="password" name="password" className='border w-full py-3 px-3 rounded-md' id="password" placeholder='Entrez votre mot de passe' />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="">Confirmez votre mot de passe *</label><br />
                        <input type="password" name="confirmPass" className='border w-full py-3 px-3 rounded-md' id="confirmPass" placeholder='Confirmez votre mot de passe' />
                    </div>
                    <div className='flex justify-center py-6'>
                        <Button title='Créez votre compte Tribune Justice' structure='py-3 mx-4 px-8 rounded-sm text-white lowercase bg-green-700' />
                    </div>
                    <div className='text-center'>
                        <p>Avez-vous déjà un compte ? <Link href="../../pages/connect" className='text-sky-600'>Connectez-vous</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterStep1
