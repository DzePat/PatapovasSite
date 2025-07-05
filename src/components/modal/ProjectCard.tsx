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
  position: relative;
  width: 40vw;
  min-width: 320px;
  height: 80vh;
  min-height: 420px;
  background-color: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  overflow-y: auto;
  overflow-x: hidden;
`

const Title = styled.p`
  margin-top: 2vw;
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
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
    flex-shrink: 0;
`

const Image = styled.img`
    flex: 0 0 auto;
    padding: 2vw;
    width: 300px;
    height: auto;
    object-fit: cover; 
`

const ExitButton = styled.button`
  position: absolute;
  right: 0;
  background-color: #7b0000;
  color: white;
  border: solid 1px black;
  border-radius: 30px;
  width: 8vw;
  max-width: 60px;
  height: 8vh;
  max-height: 60px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
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
              {(prop.title === "Loading") && <Loading></Loading>}
              <ExitButton onClick={onExit}>X</ExitButton>
              {(prop.title != "Loading") && 
                <>
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
                </>
              }
              </TextContainer>    
        </Container>
    );
}

export default ProjectCard;