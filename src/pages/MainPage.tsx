import styled from 'styled-components';
import { useEffect,useState} from 'react';
import { emptyProject, Project } from '../models/project';
import { fetchProjects } from '../services/projectservice';
import { getLatestProject } from '../utils/sort';

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
      
    </Container>
    </>
  );
}

export default MainPage