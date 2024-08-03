import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Image from 'next/image'; // Adjust the path to your image file

interface WelcomeProps {
    beforeT?: string;
    title: string;
    description: string;
    buttonTitle1?: string;
    buttontitle2?: string;
    image: string;
    custom?: string;
}

const WelcomeContainer: React.FC<WelcomeProps> = ({ title, image, beforeT, description, buttonTitle1, buttontitle2, custom }) => {
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
                    <p className="text-sm md:text-base lg:text-lg">{beforeT}</p>
                    <h1 className="text-xl md:text-2xl lg:text-4xl py-2 md:py-4 font-bold">{title}</h1>
                    <p className="text-base md:text-lg lg:text-xl py-2 md:py-4">{description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Button title={buttonTitle1} structure='px-4 md:px-6 hover:bg-green-800 rounded-md capitalize text-base md:text-lg font-bold py-2 md:py-3 hover:text-white text-green-700 border-2 border-green-700 hover:bg-green-700' />
                        <Button title={buttontitle2} structure='px-4 md:px-6 hover:bg-green-800 rounded-md capitalize text-base md:text-lg font-bold py-2 md:py-3 text-white bg-green-700' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeContainer;
