import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`;
const ImageContainer = styled.img`
  width: 9vw;
  height: 9vh;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  width: 100vw;     
  display: flex;
  flex-direction: column;
`;

const LogoContainerLeft = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  margin-left: 10vw;
`;
const LogoContainerRight = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: center;
  margin-right: 10vw;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderOne = styled.label`
  font-family: 'Inter', times, serif;
  color: black;
  font-weight: bold;
  font-size: 4vh;
`;

const HeaderTwo = styled.label`
  font-family: 'Inter', times, serif;
  margin: 1vh;
  color: black;
  font-weight: bold;
  font-size: 3vh;
`;

const CustomText = styled.p`
  font-family: "Inter", Times, serif;
  color: black;
  font-size: 2vh;
  text-align: center;
`;

function MainPage() {

  return (      
    <>
    <Container>
      <HeaderOne>Gotta stack ’em all!</HeaderOne>
      <CustomText>Every logo here represents hands on experience and tools I have used in real projects, experiments, and production code. The stack keeps evolving, and so do I.</CustomText>
      <LogoContainer>
        <LogoContainerLeft>
          <HeaderTwo>Languages</HeaderTwo>
          <TextContainer>
            <ImageContainer src='https://imgur.com/xAD2fXj.png' alt='TS'></ImageContainer>
            <ImageContainer src='https://imgur.com/Fx3u60K.png' alt='JS'></ImageContainer>
            <ImageContainer src='https://imgur.com/HjQWR1b.png' alt='HTML'></ImageContainer>
            <ImageContainer src='https://imgur.com/X2KwgVp.png' alt='CSS'></ImageContainer>
          </TextContainer>
          <TextContainer>
            <ImageContainer src='https://imgur.com/FtaEbFl.png' alt='C#'></ImageContainer>
            <ImageContainer src='https://imgur.com/58PkDJi.png' alt='Py'></ImageContainer>
            <ImageContainer src='https://imgur.com/puqqEFz.png' alt='Java'></ImageContainer>
            <ImageContainer src='https://imgur.com/74ZGPx9.png' alt='Clojure'></ImageContainer>
          </TextContainer>
        </LogoContainerLeft>
        <LogoContainerRight>
          <HeaderTwo>Services & Databases</HeaderTwo>
          <TextContainer>
            <ImageContainer src='https://imgur.com/WM0bXaq.png' alt='AWS'></ImageContainer>
            <ImageContainer src='https://imgur.com/3Z2q8QC.png' alt='Github'></ImageContainer>
            <ImageContainer src='https://imgur.com/BDXrHqK.png' alt='Heroku'></ImageContainer>
            <ImageContainer src='https://imgur.com/aMntOxk.png' alt='Firestore'></ImageContainer>
          </TextContainer>
          <TextContainer>
            <ImageContainer src='https://imgur.com/ipSPgKq.png' alt='Auth0'></ImageContainer>
            <ImageContainer src='https://imgur.com/6GiWa2Y.png' alt='PostGreSQL'></ImageContainer>
          </TextContainer>
        </LogoContainerRight>
        <LogoContainerLeft>
          <HeaderTwo>Frameworks & Libraries</HeaderTwo>
          <TextContainer>
            <ImageContainer src='https://imgur.com/CX6fjqY.png' alt='React'></ImageContainer>
            <ImageContainer src='https://imgur.com/1qMNYVJ.png' alt='NextJs'></ImageContainer>
            <ImageContainer src='https://imgur.com/AuUIRtY.png' alt='Tailwind'></ImageContainer>
            <ImageContainer src='https://imgur.com/FKUIuxE.png' alt='Bootstrap'></ImageContainer>
          </TextContainer>
        </LogoContainerLeft>
        <LogoContainerRight>
          <HeaderTwo>IDE's, Editors & Engines</HeaderTwo>
          <TextContainer>
            <ImageContainer src='https://imgur.com/kGifuTG.png' alt='VScode'></ImageContainer>
            <ImageContainer src='https://imgur.com/V5ot2aq.png' alt='VS'></ImageContainer>
            <ImageContainer src='https://imgur.com/rjHlW1x.png' alt='Unity'></ImageContainer>
          </TextContainer>
        </LogoContainerRight>
      </LogoContainer>
    </Container>
    </>
  );
}

export default MainPage