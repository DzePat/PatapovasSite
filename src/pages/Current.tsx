import { useEffect,useState} from "react";
import { Project } from '../models/project';

function CurrentProject() {

  const [projectData, setData] = useState<Project | null>(null);
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const ProjectName = "TestProjectTitle";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(audience + `api/projects?name=${encodeURIComponent(ProjectName)}`);
      const resjson = await res.json();
      setData(resjson);
      console.log(projectData);
      console.log(resjson);
    };
    fetchData();
  }, [ProjectName]);
  
 return (      
    <div className="mainpage">
       <p> This is current Project</p>
       <p>Title: {projectData?.title}</p>
       <p>Description: {projectData?.description}</p>
       <p>Summary: {projectData?.summary}</p>
        <p>img_URL {projectData?.img_url}</p>
    </div>
  );
}

export default CurrentProject;