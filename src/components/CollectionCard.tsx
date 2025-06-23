import styled from 'styled-components';
import { Project } from '../models/project';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const CardContainer = styled.div`
  width: 300px;
  height: 420px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 20px;
`

const Title = styled.p`
  padding: 2vh;
  font-size: clamp(15px, 2vw, 20px);;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`

const Image = styled.img`
    width: 200px;
    height: auto; 
`

type ProjectProp = {
  prop: Project;
};

const DisplayCard = styled.div`
  position: absolute;
  width: 300px;
  height: 420px;
  margin-top: 50px;
`

function CollectionCard({ prop}: ProjectProp) {
    const [show, setShow] = useState(false);
    return (
        <>
            <CardContainer onClick={() => setShow(true)}>
                <Title> {prop.title}</Title>
                <Image src={prop.img_url[0]}></Image>
            </CardContainer>
            {show && (
            <DisplayCard>
                <ProjectCard prop={prop} show={show} onExit={() => setShow(false)}/>
            </DisplayCard>
            )}
        </>
    );
}

export default CollectionCard;