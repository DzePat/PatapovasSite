import { useState } from 'react'
import './App.css'
import { CognitoIdentityProviderClient, InitiateAuthCommand, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider";
import { useAuth } from "react-oidc-context";

const config = { region: "eu-north-1" }
const cognitoClient = new CognitoIdentityProviderClient(config);
const clientId = "38pr68geljr73eks04m3rg0lb0";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const input = {
      "AuthFlow": "USER_PASSWORD_AUTH",
      "AuthParameters": {
        "USERNAME": username,
        "PASSWORD": password,
      },
      "ClientId": clientId,
    };

    const command = new InitiateAuthCommand(input);
    try {
      const response = await cognitoClient.send(command);
      console.log(response);

      if (response['$metadata']['httpStatusCode'] === 200) {
        alert("Login Successful!");
        // Redirect to patapovas.com after successful login
        window.location.href = "https://patapovas.com";
      } else {
        alert("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.name === "InvalidParameterException") {
        // Invalid username or password
        alert("Incorrect username or password. Please try again.");
        } else {
        // Handle other errors
        setError("An error occurred. Please try again later.");
        }
    }
  };

  return (
    <div className='login-container'>
      <div className='login-field-container'> 
        <input className='login-field' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}></input>
        <input type='password' className='login-field' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
      </div>
      <button className='gradient-button-orange' onClick={handleLogin}>Sign in</button>
    </div>
  );
}


/*
const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "38pr68geljr73eks04m3rg0lb0";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://<user pool domain>";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }
*/

//login and registration
/*
<button className='custom-button' onClick={() => auth.signinRedirect()}>Sign in</button>
<button className='custom-button' onClick={() => signOutRedirect()}>Sign out</button>
*/

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='CustomMargin'>Dzedas is working on it</h1>
      <h3 className='CustomMargin'> sanity meter</h3>
      <button onClick={() => setCount((count) => count + 1)}>
       {count}
      </button>
    </>
  )
}*/

export default App
