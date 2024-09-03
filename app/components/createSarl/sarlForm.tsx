'use client'
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
    objectOfTheCompany: Yup.array().of(Yup.string().required('Object is required')),
    companyName: Yup.string().required('Company Name is required'),
    companyAbbreviation: Yup.string().required('Company Abbreviation is required'),
    durationInYears: Yup.number().required('Duration is required').min(1, 'Must be at least 1 year'),
  }),
  Yup.object({
    companyAddress: Yup.string().required('Company Address is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    city: Yup.string().required('City is required'),
    contributors: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Contributor name is required'),
        contribution: Yup.number().required('Contribution is required'),
        amountInWords: Yup.string().required('Amount in words is required')
      })
    ),
  }),
  Yup.object({
    socialCapital: Yup.object({
      amount: Yup.number().required('Capital Amount is required'),
      amountInWords: Yup.string().required('Amount in Words is required'),
      numberOfShares: Yup.number().required('Number of Shares is required'),
      numberOfSharesInWords: Yup.string().required('Number of Shares in Words is required'),
      nominalValuePerShare: Yup.number().required('Nominal Value per Share is required'),
      nominalValuePerShareInWords: Yup.string().required('Nominal Value per Share in Words is required'),
      shareNumbersRangeFrom: Yup.number().required('Share Number Range From is required'),
      shareNumbersRangeTo: Yup.number().required('Share Number Range To is required'),
      numberOfAssociates: Yup.number().required('Number of Associates is required'),
      sharesPerAssociate: Yup.number().required('Shares per Associate is required')
    }),
    companyManagement: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Manager name is required'),
        term: Yup.string().required('Term is required')
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
                  <label className="block  text-lg font-medium text-gray-700">Object of the Company</label>
                  <Field name="objectOfTheCompany[0]" className="mt-1 block w-full text-gray-400 p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="objet de l'entreprise" />
                  <ErrorMessage name="objectOfTheCompany[0]" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block text-lg font-medium text-gray-700">Company Name</label>
                  <Field name="companyName" className="mt-1 block w-full  p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="nom de l'entreprise" />
                  <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">Company Abbreviation</label>
                  <Field name="companyAbbreviation" className="mt-1 block w-full  p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Abbreviation" />
                  <ErrorMessage name="companyAbbreviation" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">Duration in Years</label>
                  <Field name="durationInYears" type="number" className="mt-1 block w-full  p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nombres d'annee" />
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
                  <label className="block  text-lg font-medium text-gray-700">Company Address</label>
                  <Field name="companyAddress" className="mt-1 block w-full  p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <ErrorMessage name="companyAddress" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">Postal Code</label>
                  <Field name="postalCode" className="mt-1 block w-full  p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">City</label>
                  <Field name="city" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">Contributors</label>
                  {values.contributors.map((_, index) => (
                    <div key={index} className="mb-1 grid grid-cols-3 gap-2">
                      <Field name={`contributors[${index}].name`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Name" />
                      <ErrorMessage name={`contributors[${index}].name`} component="div" className="text-red-500 text-sm" />
                      <Field name={`contributors[${index}].contribution`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Contribution" />
                      <ErrorMessage name={`contributors[${index}].contribution`} component="div" className="text-red-500 text-sm" />
                      <Field name={`contributors[${index}].amountInWords`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Amount in Words" />
                      <ErrorMessage name={`contributors[${index}].amountInWords`} component="div" className="text-red-500 text-sm" />
                    </div>
                  ))}
                </div>

                <div className="mb-1">
                  <label className="block  text-lg font-medium text-gray-700">Social Capital</label>
                  <div className='grid grid-cols-4 gap-1'>
                    <Field name="socialCapital.amount" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Amount" />
                    <ErrorMessage name="socialCapital.amount" component="div" className="text-red-500 text-sm" />
                    <Field name="socialCapital.amountInWords" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Amount in Words" />
                    <ErrorMessage name="socialCapital.amountInWords" component="div" className="text-red-500 text-sm" />
                    <Field name="socialCapital.numberOfShares" type="number" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Number of Shares" />
                    <ErrorMessage name="socialCapital.numberOfShares" component="div" className="text-red-500 text-sm" />
                    <Field name="socialCapital.numberOfSharesInWords" className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Number of Shares in Words" />
                    <ErrorMessage name="socialCapital.numberOfSharesInWords" component="div" className="text-red-500 text-sm" />
                </div>
                </div>
                <div className="mb-1">
                  <label className="block text-lg font-medium text-gray-700">Company Management</label>
                  {values.companyManagement.map((_, index) => (
                    <div key={index} className="mb-1 grid grid-cols-2 gap-2">
                      <Field name={`companyManagement[${index}].name`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Manager Name" />
                      <ErrorMessage name={`companyManagement[${index}].name`} component="div" className="text-red-500 text-sm" />
                      <Field name={`companyManagement[${index}].term`} className="mt-1 block w-full p-2 border py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Term" />
                      <ErrorMessage name={`companyManagement[${index}].term`} component="div" className="text-red-500 text-sm" />
                    </div>
                  ))}
                </div>
                </div>
                </div>
              </>
            )}

            <div className="flex justify-around m-auto w-4/12">
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="px-12 py-3 rounded-md text-white uppercase mt-2 bg-green-700">
                  Back
                </button>
              )}
              <button type="submit" className="px-12 py-3 rounded-md text-white uppercase mt-2 bg-green-700" disabled={isSubmitting}>
                {step === validationSchema.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
