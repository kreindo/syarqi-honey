import Image from 'next/image';
import styled from 'styled-components';
export default function Logo() {
  return (
    <LogoMoji>
      {/* 🍯 <span>Syarqi Honey</span> */}
      <Image src={'/Logo.png'} alt={'logoimg'} width={64} height={64} />
    </LogoMoji>
  );
}

const LogoMoji = styled.div``;
