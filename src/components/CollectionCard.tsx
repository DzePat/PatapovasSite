import styled from 'styled-components';
import { Project } from '../models/project';
import { useState } from 'react';
import ProjectCard from './modal/ProjectCard';

const CardContainer = styled.div`
  width: 300px;
  height: 370px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: 20px;
  border: solid 3px white;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 150px;
    height: 200px;
  }
`

const Title = styled.p`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`
  
const Image = styled.img`
  width: 295px;
  height: auto;
  
  @media (max-width: 600px) {
    width: 150px;
    height: auto;
  }
`
const DisplayCard = styled.div`
  position: absolute;
  width: 300px;
  height: 420px;
`
    
const Cover = styled.div`
  width: 300px;
  height: 370px;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;

  @media (max-width: 600px) {
    width: 150px;
    height: 200px;
  }

  &:hover {
    opacity: 1;
  }
`

const CustomButton = styled.button`
  background-color: rgba(55,55,55,1);
  width: 150px;
  height: 40px;
  border-radius: 15px;
  font-size: clamp(14px, 2vw, 18px);
`

type ProjectProp = {
  prop: Project;
  actions?: React.ReactNode;
};


function CollectionCard({ prop , actions}: ProjectProp) {
    const [show, setShow] = useState(false);
    return (
        <>
            <CardContainer>
                <Image src={prop.img_urls[0]}></Image>
                <Title> {prop.title}</Title>
                <Cover>
                  <CustomButton onClick={() => setShow(true)}>View</CustomButton>
                  {actions}
                </Cover>
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