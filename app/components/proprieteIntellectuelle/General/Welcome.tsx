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
}

const WelcomeContainer:React.FC<WelcomeProps> = ({title, image, beforeT, description, buttonTitle, custom, customButton}) => {
  return (
    <div className="relative w-full h-[430px] md:h-[620px]">
      <Image
        src={image}
        alt="Sample Image"
        layout="fill"
        objectFit="cover"
        objectPosition='center'
        className="w-full h-full bg-opacity-90"
      />
      <div className={`absolute inset-0 flex items-center ${custom}`}>
        <div className="bg-opacity-50 text-white tex-center p-4 rounded">
          <p className='py-4 text-lg md:text-2xl'>{beforeT}</p>
          <h1 className="text-4xl md:text-5xl md:py-4 font-semibold">{title}</h1>
          <p className='py-4 text-lg md:text-2xl'>{description}</p>
          <Button title={buttonTitle} structure={`px-6 hover:bg-green-800 rounded-md capitalize text-2lg md:text-xl font-bold py-2 md:py-3 text-white ${customButton}`} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;