import styled from 'styled-components';
import { useEffect,useState, useCallback} from 'react';
import { Project } from '../models/project';
import CollectionCard from '../components/CollectionCard';
import { Loading } from '../components/Loading';
import { fetchProjects } from '../services/projectservice';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 120px;
  box-sizing: border-box; 
  display: flex;
  flex-wrap: wrap;
  z-index: 5;
`;

function CollectionPage() {
  const [projectData, setData] = useState<Project[]>([]);
  const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;

  const fetchData = useCallback(async () => {
      const resjson = await fetchProjects();
      setData(resjson);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (      
    <Container>
      {!projectData && 
      <Loading></Loading>}
      {projectData && projectData.map(project => (
        <CollectionCard key={project.title} prop={project} actions={[]}/>
      ))}

    </Container>
  );
}

export default CollectionPage;