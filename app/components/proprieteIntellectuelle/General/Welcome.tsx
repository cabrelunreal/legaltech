import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Image from 'next/image';// Adjust the path to your image file

interface WelcomeProps{
    beforeT?: string;
    title: string;
    description: string;
    buttonTitle?: string;
    image: string;
    custom?: string;
    customButton?: string;
    onclick?: () => void;
}

const WelcomeContainer:React.FC<WelcomeProps> = ({title, onclick, image, beforeT, description, buttonTitle, custom, customButton}) => {
  return (
    <div className="relative w-full h-[430px] md:h-[620px]">
      <Image
        src={image}
        alt="Sample Image"
        layout="fill"
        objectFit="cover"
        objectPosition='center'
        className="w-full h-full"
      />
      <div className={`absolute inset-0 md:w-full flex items-center ${custom}`}>
        <div className="bg-opacity-70 md:h-full md:pt-[160px] bg-black md:w-full text-white">
          <p className='py-4 text-lg md:text-2xl'>{beforeT}</p>
          <h1 className="text-4xl md:text-5xl md:py-4 font-semibold">{title}</h1>
          <p className='py-4 text-lg md:text-2xl'>{description}</p>
          <Button title={buttonTitle} onClick={onclick} structure={`px-6 hover:bg-green-800 rounded-md capitalize text-2lg md:text-xl font-bold py-2 md:py-3 text-white ${customButton}`} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;