import { useAuth0 } from "@auth0/auth0-react";
import { useEffect,useState, useCallback} from "react";
import styled from 'styled-components';
import {  Project } from "../models/project";
import CollectionCard from "../components/CollectionCard";
import AddProject from "../components/modal/AddProject";
import {fetchProjects, removeProjectById} from "../services/projectservice";

const Container = styled.nav`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ProjectContainer = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 120px;
  flex-wrap: wrap;
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

function Dashboard() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [showAdd, setShowAdd] = useState<{
    show: boolean,
    project: Project | null}>({show: false,project: null});
  const [projectData, setData] = useState<Project[]>([]);
  const [token, setToken] = useState<string>("");
  const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;

  const fetchData = useCallback(async () => {
    const resjson = await fetchProjects();
    setData(resjson);
  }, []);
  

  useEffect(() => {
  if (!isAuthenticated) return;
    getAccessTokenSilently({
      authorizationParams: { audience },
    }).then(setToken);
    fetchData();
  }, [isAuthenticated, fetchData, getAccessTokenSilently, audience]);

 return (      
    <Container>
        {showAdd.show && (
          <AddProject onExit={() => setShowAdd({show: false,project: null})} token={token} project={showAdd.project} onSuccess={fetchData}></AddProject>
        )}
        <ButtonContainer>
           <CustomButton onClick={() => setShowAdd({show: true,project: null})}>Add Project</CustomButton>
        </ButtonContainer>
        <ProjectContainer>
          {projectData.map(document => (
            <CollectionCard key={document.title} prop={document} 
              actions=
              {(<>
                <OptionButton onClick={() => setShowAdd({show: true,project: document})}>Edit</OptionButton>
                <OptionButton onClick={async () => {await removeProjectById(document.id,token); await fetchData();}}>Delete</OptionButton>
              </>)}
            />
          ))}
        </ProjectContainer>
    </Container>
  );
}

export default Dashboard