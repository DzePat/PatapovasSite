import styled from 'styled-components';
import { useEffect,useState} from 'react';
import ProjectCard from '../components/modal/ProjectCard';
import { emptyProject, Project } from '../models/project';
import { fetchProjects } from '../services/projectservice';
import { getLatestProject } from '../utils/sort';

const MyButton = styled.button`
  background-color: #8f00ca;
  color: white;
  padding: 8px 16px;
  border: solid 3px black;
  border-radius: 30px;
  width: 16vw;
  min-width: 200px;
  height: 6vh;
  min-height: 50px;
  cursor: pointer;
  font-size: clamp(14px, 2vw, 22px);
  font-weight: bold;
  &:hover {
    background-color: #c888e2;
    font-size: 22px;
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
  useEffect(() => {
    const fetchData = async () => {
      const resjson = await fetchProjects();
      setData(getLatestProject(resjson));
    };
    fetchData();
}, []);


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