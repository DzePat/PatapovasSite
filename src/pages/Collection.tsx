import styled from 'styled-components';
import { useEffect,useState} from 'react';
import { Project } from '../models/project';
import CollectionCard from '../components/CollectionCard';

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
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(audience + `api/projects`);
      const resjson = await res.json();
      setData(resjson);
    };
    fetchData();
  }, []);

  return (      
    <Container>
      {projectData.map(project => (
        <CollectionCard key={project.title} prop={project} actions={[]}/>
      ))}
    </Container>
  );
}

export default CollectionPage;