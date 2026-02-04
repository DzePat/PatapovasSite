import styled from 'styled-components';
import { Project } from '../../models/project';
import { Loading } from '../Loading';
import { useState } from 'react';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(120,120,120,0.8);
  z-index: 51;
`
const TextContainer = styled.div`
  width: 800px;
  height: 800px;
  min-width: 500px;
  min-height: 500px;
  background-color: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 480px) {
    min-width: 400px;
    min-height: 420px;
  }
`

const Title = styled.p`
  margin-top: 40px;
  font-size: clamp(30px, 2vw, 50px);;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: black;
`
const Header = styled.header`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: black;
`

const NormalText = styled.p`
  font-size: larger;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 2vw;
  color: black;
`

const ImageContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 400px;
    height: 400px;
  }
`

const Image = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 400px;
    height: 400px;
  }
`

const ExitButton = styled.button`
  align-self: flex-end;
  position: fixed;
  margin: 2px;
  background-color: #7b0000;
  color: white;
  border: solid 3px black;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: large;
  &:hover {
    background-color: #ff0000;
  }
`;

const Github = styled.a`
  font-size: 14px;
  color: black;
  cursor: pointer;
  padding: 10px
`

type ProjectProp = {
  prop: Project;
  show: boolean;
  onExit: () => void;
};

function ProjectCard({ prop, show, onExit}: ProjectProp) {
    if (!show) return null;
    return (      
        <Container>
              <TextContainer>              
                  <ExitButton onClick={onExit}>X</ExitButton>
                  <Title> {prop.title}</Title>
                  <ImageContainer>
                    {prop.img_urls.map(image => (
                      <Image key={image} src={image}></Image>
                    ))}
                  </ImageContainer>
                  <Header> Github </Header>
                  <Github href={prop.github} target="_blank" rel="noopener noreferrer">{prop.github}</Github>
                  <Header> Summary</Header>
                  <NormalText>{prop.summary}</NormalText>
                  <Header> Description </Header>
                  <NormalText>{prop.description}</NormalText>
              </TextContainer>    
        </Container>
    );
}

export default ProjectCard;