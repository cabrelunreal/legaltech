import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Image from 'next/image'; // Adjust the path to your image file

interface WelcomeProps {
    beforeT?: string;
    title: string;
    description: string;
    buttonTitle1?: string;
    buttontitle2?: string;
    onclick?: () => void;
    image: string;
    custom?: string;
    custbutton: string;
}

const WelcomeContainer: React.FC<WelcomeProps> = ({ title, image, onclick, beforeT, description, buttonTitle1, custbutton, buttontitle2, custom }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[620px]">
            <Image
                src={image}
                alt="Sample Image"
                layout="fill"
                objectFit="cover"
                objectPosition='center'
                className="w-full h-full"
            />
            <div className={`absolute bg-black bg-opacity-80 inset-0 flex items-center justify-center ${custom}`}>
                <div className=" bg-opacity-50 text-white text-center p-4 md:p-6 lg:p-8 rounded mx-4 md:mx-8">
                    <p className="text-sm md:text-lg pb-6">{beforeT}</p>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl py-2 md:py-4 font-semibold">{title}</h1>
                    <p className="text-sm md:text-lg py-2 md:py-4 md:paw-7/12 m-auto">{description}</p>
                    <Button title={buttonTitle1} structure={custbutton} onClick={onclick} />
                </div>
            </div>
        </div>
    );
};

export default WelcomeContainer;
