import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MyButton = styled.button`
  background-color: teal;
  color: white;
  padding: 8px 16px;
  border: solid 1px black;
  border-radius: 30px;
  width: 300px;
  height: 60px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  &:hover {
    background-color: darkcyan;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function MainPage() {
  const navigate = useNavigate();
 return (      
   <>
   <Container>
      <MyButton onClick={() => navigate("/current")}>Current project</MyButton>
    </Container>
   </>
  );
}

export default MainPage