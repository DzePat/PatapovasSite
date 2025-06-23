import styled from 'styled-components';
import { useEffect,useState} from 'react';
import ProjectCard from '../components/ProjectCard';
import { emptyProject, Project } from '../models/project';

const MyButton = styled.button`
  position: absolute;
  top: 50%;
  right: 42.5vw;
  z-index: 10000;
  background-color: teal;
  color: white;
  padding: 8px 16px;
  border: solid 1px black;
  border-radius: 30px;
  width: 15vw;
  height: 6vh;
  cursor: pointer;
  font-size: 2vh;
  font-weight: bold;
  &:hover {
    background-color: darkcyan;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function MainPage() {
  const [show, setShow] = useState(true);
  const [projectData, setData] = useState<Project>(emptyProject);
  const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;
  const ProjectName = "Patapovas Website";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(audience + `api/projects?name=${encodeURIComponent(ProjectName)}`);
      const resjson = await res.json();
      setData(resjson);
  };
  fetchData();
  }, [ProjectName]);


  return (      
    <>
    {!show && (
      <MyButton onClick={() => setShow(true)}>Current Project</MyButton>
    )}
    <Container>
      <ProjectCard prop={projectData} show={show} onExit={() => setShow(false)}></ProjectCard>
    </Container>
    </>
  );
}

export default MainPage