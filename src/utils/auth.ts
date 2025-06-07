import { useAuth0 } from "@auth0/auth0-react";

export const getAccessToken = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getToken = async () => {
    const token = await getAccessTokenSilently({
        authorizationParams: {
            audience: 'http://localhost:3000/',
        }
        });
    console.log("Access token:", token);
    return token;
  };

  return { getToken };
};


