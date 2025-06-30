import { useAuth0 } from "@auth0/auth0-react";
import { useEffect,useState, useRef} from "react";
import styled from 'styled-components';
import { Project } from "../models/project";
import CollectionCard from "../components/CollectionCard";
import AddProject from "../components/modal/AddProject";
import {fetchProjects} from "../services/projectservice";

const Container = styled.nav`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProjectContainer = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
`

const ButtonContainer = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;
    margin-top: 60px;
`

const CustomButton = styled.button`
    background: none;
    border: none;
    margin-right: 2vw;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: Black;
    cursor: pointer;
    user-select: none;
    &:hover {
        text-decoration: underline;
        font-size: 19px;
        color: #d19e32;
    }
`

const OptionButton = styled.button`
  margin: 4px;
  background-color: rgba(55,55,55,1);
  width: 150px;
  height: 40px;
  z-index: 3;
  border-radius: 15px;
  font-size: clamp(14px, 2vw, 18px);
`



function editProject(){
  console.log("clicked edit project");
}

function deleteProject(){
  console.log("clicked delete project");
}

function Dashboard() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [projectData, setData] = useState<Project[]>([]);
  const [token, setToken] = useState<string>("");
  const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;

  useEffect(() => {
  if (!isAuthenticated) return;
    
  const fetchData = async () => {   
      const token = await getAccessTokenSilently({
        authorizationParams: { audience },
      });
      setToken(token);
      const resjon = await fetchProjects();  
      setData(resjon);
    };

    fetchData();
  }, [isAuthenticated]);

  console.log("dashboard");

 return (      
    <Container>
        {showAdd && (
          <AddProject onExit={() => setShowAdd(false)} token={token}></AddProject>
        )}
        <ButtonContainer>
           <CustomButton onClick={() => setShowAdd(true)}>Add Project</CustomButton>
        </ButtonContainer>
        <ProjectContainer>
          {projectData.map(project => (
            <CollectionCard key={project.title} prop={project} 
              actions=
              {(<>
                <OptionButton onClick={() => editProject()}>Edit</OptionButton>
                <OptionButton onClick={() => deleteProject()}>Delete</OptionButton>
              </>)}
            />
          ))}
        </ProjectContainer>
    </Container>
  );
}

export default Dashboard