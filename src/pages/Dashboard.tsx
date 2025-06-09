import { useAuth0 } from "@auth0/auth0-react";
import { useEffect,useState} from "react";

function Dashboard() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  if(isAuthenticated){
    const [message, setMessage] = useState<string>();
    const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;
  
    useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently({
        authorizationParams: { audience }
      });
      console.log(token);
          const res = await fetch("http://localhost:3000/api/private", {
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
    <div className="mainpage">
       <p> This is my dashboard </p>
    </div>
  );
}

export default Dashboard