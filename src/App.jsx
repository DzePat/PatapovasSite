import Router from './routes/Router';
import Navbar from './components/nav/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import Particle from './utils/Particle';

function App() {
  const { isLoading, error } = useAuth0();
return (
  <main>
    {error && <p> Authentication Error</p>}
    {!error && isLoading && <p> Loading...</p>}
    {!error && !isLoading && (
      <>
        <Navbar/>
          <Particle/>
        <Router/>
      </>
    )}
  </main>
  );
}

export default App
