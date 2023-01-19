import Image from 'next/image';

export default function HeroIllustration() {
  return <Image src={'/Hero.png'} alt="hero image" width={500} height={500} />;
}
