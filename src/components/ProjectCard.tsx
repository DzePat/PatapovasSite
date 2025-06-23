import styled from 'styled-components';
import { Project } from '../models/project';
import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
`
const TextContainer = styled.div`
  position: relative;
  width: 40vw;
  min-width: 320px;
  height: 80vh;
  min-height: 420px;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  overflow: auto;
`

const Title = styled.p`
  font-size: clamp(30px, 2vw, 50px);;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`
const Header = styled.header`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`

const NormalText = styled.p`
  font-size: larger;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 2vw;
`

const Image = styled.img`
    width: 300px;
    height: auto; 
`

const MyButton = styled.button`
  position: absolute;
  right: 0;
  background-color: #7b0000;
  color: white;
  padding: 8px 16px;
  border: solid 1px black;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  &:hover {
    background-color: #ff0000;
  }
`;

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
                <MyButton onClick={onExit}>X</MyButton>
                <Title> {prop.title}</Title>
                <Image src={prop.img_url[0]}></Image>
                <Header> Summary</Header>
                <NormalText>{prop.summary}</NormalText>
                <Header> Description </Header>
                <NormalText>{prop.description}</NormalText>
            </TextContainer>
        </Container>
    );
}

export default ProjectCard;