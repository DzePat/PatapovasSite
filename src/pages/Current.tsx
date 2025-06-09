import { useEffect,useState} from "react";
import { Project } from '../models/project';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

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
  height: 80vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  overflow: auto;
`

const Title = styled.p`
  font-size: 50px;
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

function CurrentProject() {
  const navigate = useNavigate();
  const [projectData, setData] = useState<Project | null>(null);
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
    <Container>
      <TextContainer>
        <MyButton onClick={() => navigate("/")}>X</MyButton>
        <Title> {projectData?.title}</Title>
        <Image src={projectData?.img_url[0]}></Image>
        <Header> Summary</Header>
        <NormalText>{projectData?.summary}</NormalText>
        <Header> Description </Header>
        <NormalText>{projectData?.description}</NormalText>
      </TextContainer>
    </Container>
  );
}

export default CurrentProject;