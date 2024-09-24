import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Image from 'next/image'; // Ajustez le chemin vers votre fichier image

interface WelcomeProps {
    title: string;
    description: string;
    buttonTitle?: string;
    image: string;
    custom?: string;
    onClick?: () => void; // Correction de 'onclick' en 'onClick'
}

const WelcomeContainer: React.FC<WelcomeProps> = ({ title, onClick, image, description, buttonTitle, custom }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[620px]">
            <Image
                src={image}
                alt="Image Exemple" // "Sample Image" traduit en français
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
            />
            <div className={`absolute bg-black bg-opacity-30 inset-0 flex items-center justify-center ${custom}`}>
                <div className="bg-black bg-opacity-50 text-white text-center p-4 md:p-6 lg:p-8 rounded mx-4 md:mx-8">
                    <h1 className="text-xl md:text-2xl lg:text-4xl py-2 md:py-4 font-bold">{title}</h1>
                    <p className="text-base md:text-lg lg:text-xl py-2 md:py-4">{description}</p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-3 pb-12">
                        <select name="country" id="country" className="py-3 px-2 md:py-4 md:px-3 text-black rounded-md focus:outline-none">
                            <option value="Cameroon">Sélectionnez votre pays</option>
                            <option value="Cameroon">Cameroun</option> {/* Correction du nom "Cameroon" en "Cameroun" */}
                            <option value="Benin">Bénin</option> {/* Ajout de l'accent sur "Bénin" */}
                            <option value="Cote Ivoire">Côte d&apos;Ivoire</option> {/* Correction de "Cote Ivoire" en "Côte d'Ivoire" */}
                            <option value="Togo">Togo</option>
                            <option value="Tchad">Tchad</option>
                        </select>
                        <select name="status" id="status" className="py-3 px-2 md:py-4 md:px-3 text-black rounded-md focus:outline-none">
                            <option value="Selectionnez un statut">Sélectionnez un statut</option>
                            <option value="Sarl">SARL</option> {/* Capitalisation de "Sarl" en "SARL" */}
                            <option value="SarlU">SARLU</option> {/* Capitalisation de "SarlU" en "SARLU" */}
                            <option value="Entreprise Individuelle">Entreprise Individuelle</option>
                        </select>
                    </div>
                    <Button title={buttonTitle} onClick={onClick} structure='px-4 md:px-6 hover:bg-green-800 rounded-md capitalize text-base md:text-lg font-bold py-2 md:py-3 text-white bg-green-700' />
                </div>
            </div>
        </div>
    );
};

export default WelcomeContainer;
