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
        <ImageContainer src='/src/assets/Csharp.png' alt='C#'></ImageContainer>
        <ImageContainer src='/src/assets/Typescript.png' alt='TS'></ImageContainer>
        <ImageContainer src='/src/assets/Javascript.png' alt='JS'></ImageContainer>
        <ImageContainer src='/src/assets/Python.png' alt='Py'></ImageContainer>
        <ImageContainer src='/src/assets/React.png' alt='React'></ImageContainer>
        <ImageContainer src='/src/assets/VScode.png' alt='VScode'></ImageContainer>
      </LogoContainer>
    </Container>
    </>
  );
}

export default MainPage