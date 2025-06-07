import { useEffect,useState} from "react";
import { data } from "react-router-dom";

function CurrentProject() {

  const [message, setMessage] = useState<string>();
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  useEffect(() => {
  const fetchData = async () => {
        const res = await fetch(audience + "?name=${encodeURIComponent(projectName)}");
        const testprojectname = "TestProjectTitle";
        const data = await res.json();
        setMessage(data.message);
    };
    fetchData();
  }, [data]);
  
  console.log("message", message)
 return (      
    <div className="mainpage">
       <p> This is current Project</p>
    </div>
  );
}

export default CurrentProject;