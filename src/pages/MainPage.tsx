import styled from 'styled-components';
import { useEffect,useState} from 'react';
import ProjectCard from '../components/ProjectCard';
import { emptyProject, Project } from '../models/project';

const MyButton = styled.button`
  background-color: teal;
  color: white;
  padding: 8px 16px;
  border: solid 1px black;
  border-radius: 30px;
  width: 16vw;
  min-width: 200px;
  height: 6vh;
  min-height: 50px;
  cursor: pointer;
  font-size: clamp(14px, 2vw, 22px);
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
  const [show, setShow] = useState(false);
  const [projectData, setData] = useState<Project>(emptyProject);
  const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;
  const ProjectName = "Patapovas Website";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(audience + `api/project?name=${encodeURIComponent(ProjectName)}`);
      const resjson = await res.json();
      setData(resjson);
    };
    fetchData();
}, [ProjectName]);


  return (      
    <>
    <Container>
      {!show && (
        <MyButton onClick={() => setShow(true)}>Current Project</MyButton>
      )}
      <ProjectCard prop={projectData} show={show} onExit={() => setShow(false)}></ProjectCard>
    </Container>
    </>
  );
}

export default MainPage