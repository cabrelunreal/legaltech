import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome';
import Image from 'next/image';// Adjust the path to your image file

const Welcome = () => {
  return (
    <div>
        <WelcomeContainer title='PROPRIÉTÉ INTELLECTUELLE' 
        description='Service de protection de creation' 
        buttonTitle='Commencer'
        customButton='bg-green-700'
        custom='justify-center text-center'
        image='https://res.cloudinary.com/dedakscgk/image/upload/v1721945472/Screen_Shot_2024-06-29_at_14.51.43_1_in5kq6.png'
        />
    </div>
  );
};

export default Welcome;