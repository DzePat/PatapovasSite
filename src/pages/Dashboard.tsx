import { useAuth0 } from "@auth0/auth0-react";
import { useEffect,useState} from "react";
import styled from 'styled-components';
import { Project } from "../models/project";
import CollectionCard from "../components/CollectionCard";

const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectContainer = styled.nav`
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  display: flex;
`

const ButtonContainer = styled.div`
    position: fixed;
    top: 0;
    right: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;
    margin-top: 60px;
`

const ButtonText = styled.p`
    margin-right: 2vw;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: Black;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        font-size: 19px;
        color: #d19e32;
    }
`

const CustomButton = styled.button`
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
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [projectData, setData] = useState<Project[]>([]);
  if(isAuthenticated){
    const [message, setMessage] = useState<string>();
    const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;
  
    useEffect(() => {
    const fetchData = async () => {
      const fetchData = async () => {
          const res = await fetch(audience + `api/projects`);
          const resjson = await res.json();
          setData(resjson);
      };
      fetchData();
      try {
        const token = await getAccessTokenSilently({
        authorizationParams: { audience }
      });
          const res = await fetch(audience + "api/private", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          const data = await res.json();
          setMessage(data.message);
        } catch (err) {
          console.error("Failed to fetch protected data:", err);
        }
      };
      fetchData();
    }, [getAccessTokenSilently]);
    
    console.log("message", message)
  }
 return (      
    <Container>
        <ButtonContainer>
           <ButtonText onClick={() => showProjects? setShowProjects(false) : setShowProjects(true)}>Edit Project</ButtonText>
           <ButtonText>Add Project</ButtonText>
        </ButtonContainer>
        {showProjects &&
        <ProjectContainer>
          {projectData.map(project => (
            <CollectionCard key={project.title} prop={project} 
              actions=
              {(<>
                <CustomButton onClick={() => editProject()}>Edit</CustomButton>
                <CustomButton onClick={() => deleteProject()}>Delete</CustomButton>
              </>)}
            />
          ))}
        </ProjectContainer>
        }
    </Container>
  );
}

export default Dashboard