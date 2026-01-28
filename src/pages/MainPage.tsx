import styled from 'styled-components';
import { useEffect,useState} from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
`;
const ImageContainer = styled.img`
  width: 10vw;
  height: 10vh;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function MainPage() {
  useEffect(() => {

}, []);


  return (      
    <>
    <Container>
      <LogoContainer>
        <ImageContainer src='https://imgur.com/FtaEbFl.png' alt='C#'></ImageContainer>
        <ImageContainer src='https://imgur.com/xAD2fXj.png' alt='TS'></ImageContainer>
        <ImageContainer src='https://imgur.com/Fx3u60K.png' alt='JS'></ImageContainer>
        <ImageContainer src='https://imgur.com/HjQWR1b.png' alt='HTML'></ImageContainer>
        <ImageContainer src='https://imgur.com/X2KwgVp.png' alt='CSS'></ImageContainer>
        <ImageContainer src='https://imgur.com/58PkDJi.png' alt='Py'></ImageContainer>
        <ImageContainer src='https://imgur.com/puqqEFz.png' alt='Java'></ImageContainer>
        <ImageContainer src='https://imgur.com/CX6fjqY.png' alt='React'></ImageContainer>
        <ImageContainer src='https://imgur.com/kGifuTG.png' alt='VScode'></ImageContainer>
        <ImageContainer src='https://imgur.com/aMntOxk.png' alt='Firestore'></ImageContainer>
        <ImageContainer src='https://imgur.com/WM0bXaq.png' alt='AWS'></ImageContainer>
        <ImageContainer src='https://imgur.com/3Z2q8QC.png' alt='Github'></ImageContainer>
        <ImageContainer src='https://imgur.com/BDXrHqK.png' alt='Heroku'></ImageContainer>
        <ImageContainer src='https://imgur.com/rjHlW1x.png' alt='Unity'></ImageContainer>
        <ImageContainer src='https://imgur.com/ipSPgKq.png' alt='Auth0'></ImageContainer>
        <ImageContainer src='https://imgur.com/AuUIRtY.png' alt='Tailwind'></ImageContainer>
        <ImageContainer src='https://imgur.com/FKUIuxE.png' alt='Bootstrap'></ImageContainer>
        <ImageContainer src='https://imgur.com/6GiWa2Y.png' alt='PostGreSQL'></ImageContainer>
        <ImageContainer src='https://imgur.com/puqqEFz.png' alt='Java'></ImageContainer>
      </LogoContainer>
    </Container>
    </>
  );
}

export default MainPage