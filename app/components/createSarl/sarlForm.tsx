'use client';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  objectOfTheCompany: [''],
  companyName: '',
  companyAbbreviation: '',
  durationInYears: '',
  companyAddress: '',
  postalCode: '',
  city: '',
  country: 'Cameroun',
  contributors: [{ name: '', contribution: '', amountInWords: '' }],
  socialCapital: {
    amount: '',
    amountInWords: '',
    numberOfShares: '',
    numberOfSharesInWords: '',
    nominalValuePerShare: '',
    nominalValuePerShareInWords: '',
    shareNumbersRangeFrom: '',
    shareNumbersRangeTo: '',
    numberOfAssociates: '',
    sharesPerAssociate: ''
  },
  companyManagement: [{ name: '', term: '' }]
};

const validationSchema = [
  Yup.object({
    objectOfTheCompany: Yup.array().of(Yup.string().required('L\'objet est requis')),
    companyName: Yup.string().required('Le nom de l\'entreprise est requis'),
    companyAbbreviation: Yup.string().required('L\'abréviation de l\'entreprise est requise'),
    durationInYears: Yup.number().required('La durée est requise').min(1, 'Doit être d\'au moins 1 an'),
  }),
  Yup.object({
    companyAddress: Yup.string().required('L\'adresse de l\'entreprise est requise'),
    postalCode: Yup.string().required('Le code postal est requis'),
    city: Yup.string().required('La ville est requise'),
    contributors: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Le nom du contributeur est requis'),
        contribution: Yup.number().required('La contribution est requise'),
        amountInWords: Yup.string().required('Le montant en lettres est requis')
      })
    ),
  }),
  Yup.object({
    socialCapital: Yup.object({
      amount: Yup.number().required('Le montant du capital est requis'),
      amountInWords: Yup.string().required('Le montant en lettres est requis'),
      numberOfShares: Yup.number().required('Le nombre d\'actions est requis'),
      numberOfSharesInWords: Yup.string().required('Le nombre d\'actions en lettres est requis'),
      nominalValuePerShare: Yup.number().required('La valeur nominale par action est requise'),
      nominalValuePerShareInWords: Yup.string().required('La valeur nominale par action en lettres est requise'),
      shareNumbersRangeFrom: Yup.number().required('La plage de numéros d\'actions est requise'),
      shareNumbersRangeTo: Yup.number().required('La plage de numéros d\'actions est requise'),
      numberOfAssociates: Yup.number().required('Le nombre d\'associés est requis'),
      sharesPerAssociate: Yup.number().required('Nombre d\'actions par associé est requis')
    }),
    companyManagement: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Le nom du responsable est requis'),
        term: Yup.string().required('Le mandat est requis')
      })
    ),
  })
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const handleSubmit = (values: typeof initialValues, actions: any) => {
    if (step < validationSchema.length - 1) {
      setStep(step + 1);
    } else {
      console.log(values);
      actions.resetForm();
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[step]}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form>
            {step === 0 && (
              <>
                <div className='w-5/12 mx-auto'>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">Objet de l&apos;entreprise</label>
                    <Field name="objectOfTheCompany[0]" className="mt-1 block w-full text-gray-400 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="objet de l'entreprise" />
                    <ErrorMessage name="objectOfTheCompany[0]" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">Nom de l&apos;entreprise</label>
                    <Field name="companyName" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="nom de l'entreprise" />
                    <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">Abréviation de l&apos;entreprise</label>
                    <Field name="companyAbbreviation" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Abréviation" />
                    <ErrorMessage name="companyAbbreviation" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">Durée en années</label>
                    <Field name="durationInYears" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombres d'années" />
                    <ErrorMessage name="durationInYears" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div className='md:w-8/12 mx-auto'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-1">
                      <label className="block text-lg font-medium text-gray-700">Adresse de l&apos;entreprise</label>
                      <Field name="companyAddress" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <ErrorMessage name="companyAddress" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-1">
                      <label className="block text-lg font-medium text-gray-700">Code postal</label>
                      <Field name="postalCode" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-1">
                      <label className="block text-lg font-medium text-gray-700">Ville</label>
                      <Field name="city" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-1">
                      <label className="block text-lg font-medium text-gray-700">Contributeurs</label>
                      {values.contributors.map((_, index) => (
                        <div key={index} className="mb-1 grid grid-cols-3 gap-2">
                          <Field name={`contributors[${index}].name`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nom" />
                          <ErrorMessage name={`contributors[${index}].name`} component="div" className="text-red-500 text-sm" />
                          <Field name={`contributors[${index}].contribution`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Contribution" />
                          <ErrorMessage name={`contributors[${index}].contribution`} component="div" className="text-red-500 text-sm" />
                          <Field name={`contributors[${index}].amountInWords`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Montant en lettres" />
                          <ErrorMessage name={`contributors[${index}].amountInWords`} component="div" className="text-red-500 text-sm" />
                        </div>
                      ))}
                    </div>

                    <div className="mb-1">
                      <label className="block text-lg font-medium text-gray-700">Capital social</label>
                      <div className='grid grid-cols-4 gap-1'>
                        <Field name="socialCapital.amount" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Montant" />
                        <ErrorMessage name="socialCapital.amount" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.amountInWords" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Montant en lettres" />
                        <ErrorMessage name="socialCapital.amountInWords" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.numberOfShares" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombre d'actions" />
                        <ErrorMessage name="socialCapital.numberOfShares" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.numberOfSharesInWords" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombre d'actions en lettres" />
                        <ErrorMessage name="socialCapital.numberOfSharesInWords" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.nominalValuePerShare" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Valeur nominale par action" />
                        <ErrorMessage name="socialCapital.nominalValuePerShare" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.nominalValuePerShareInWords" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Valeur nominale en lettres" />
                        <ErrorMessage name="socialCapital.nominalValuePerShareInWords" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.shareNumbersRangeFrom" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Plage d'actions (de)" />
                        <ErrorMessage name="socialCapital.shareNumbersRangeFrom" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.shareNumbersRangeTo" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Plage d'actions (à)" />
                        <ErrorMessage name="socialCapital.shareNumbersRangeTo" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.numberOfAssociates" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombre d'associés" />
                        <ErrorMessage name="socialCapital.numberOfAssociates" component="div" className="text-red-500 text-sm" />
                        <Field name="socialCapital.sharesPerAssociate" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombre d'actions par associé" />
                        <ErrorMessage name="socialCapital.sharesPerAssociate" component="div" className="text-red-500 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className='w-5/12 mx-auto'>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">Direction de l&apos;entreprise</label>
                    {values.companyManagement.map((_, index) => (
                      <div key={index} className="mb-1 grid grid-cols-2 gap-2">
                        <Field name={`companyManagement[${index}].name`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nom" />
                        <ErrorMessage name={`companyManagement[${index}].name`} component="div" className="text-red-500 text-sm" />
                        <Field name={`companyManagement[${index}].term`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Mandat" />
                        <ErrorMessage name={`companyManagement[${index}].term`} component="div" className="text-red-500 text-sm" />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between mt-4">
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="py-2 px-4 bg-gray-500 text-white rounded">Précédent</button>
              )}
              <button type="submit" disabled={isSubmitting} className="py-2 px-4 bg-green-600 text-white rounded">
                {step === validationSchema.length - 1 ? 'Soumettre' : 'Suivant'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
