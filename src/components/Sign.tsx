import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const container = styled.div`

`

const ButtonContainer = styled.div`
    width: 160px;
    height: 40px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonText = styled.p`
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: black;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        font-size: 19px;
        color: #d19e32;
    }
`

const Sign = () => {
    const { logout,loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        <>
            {isAuthenticated ? (
            <ButtonContainer onClick={() => logout()}>
                <ButtonText>Sign out</ButtonText>
            </ButtonContainer>
            ) : (
                <ButtonContainer onClick={() => loginWithRedirect({
                        authorizationParams: {
                        audience: import.meta.env.VITE_AUTH0_AUDIENCE, 
                        scope: "read:data write:data",           
                        prompt: "consent",
                    },
                    })}>
                <ButtonText>Sign in</ButtonText>
            </ButtonContainer>
            )}
        </>
        )
}

export default Sign;