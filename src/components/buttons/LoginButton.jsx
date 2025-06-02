import { useAuth0 } from "@auth0/auth0-react";
import './Loginbutton.css';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <button className="loginBtn" onClick={() => loginWithRedirect()}>
                Login
            </button>
        )
    )
}

export default LoginButton