import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Image from 'next/image';// Adjust the path to your image file

interface WelcomeProps{
    beforeT?: string;
    title: string;
    description: string;
    buttonTitle?: string;
    image: string;
    custom?: string;
}

const WelcomeContainer:React.FC<WelcomeProps> = ({title, image, beforeT, description, buttonTitle, custom}) => {
  return (
    <div className="relative w-full h-[620px]">
      <Image
        src={image}
        alt="Sample Image"
        layout="fill"
        objectFit="cover"
        objectPosition='center'
        className="w-full h-full bg-opacity-50"
      />
      <div className={`absolute bg-black bg-opacity-30 inset-0 flex items-center ${custom}`}>
        <div className="bg-opacity-50 text-white tex-center p-4 rounded">
          <p>{beforeT}</p>
          <h1 className="text-2xl lg:text-4xl py-4 font-bold">{title}</h1>
          <p className='py-4 text-2lg lg:text-xl'>{description}</p>
          <Button title={buttonTitle} structure='px-6 hover:bg-green-800 rounded-md capitalize text-xl font-bold py-3 text-white bg-green-700' />
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;