import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 5;
  padding-top: 120px;
`;

const TextContainer = styled.div`
    width: 60vw;
    min-width: 250px;
    height: 80vh;
    min-height: 350px;
    color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-y; auto;
`

const TextHeader = styled.h1`
    color: black;
    font-size: 1.875rem; 
    font-weight: 700;
    letter-spacing: 0.05em;
`

const TextParagraphContainer = styled.div`
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
`

const TextParagraph = styled.p`
    color: black;
    font-size: 1.125rem;
    text-decoration: none;
`


function AboutPage() {
  


  return (      
    <Container>
        <TextContainer>
            <TextHeader>Short about me</TextHeader>
            <TextParagraphContainer>
                <TextParagraph>
                    I’m an enthusiastic junior developer who’s just starting his journey to learn the ropes and deepen my understanding of how things work in practice.
                    Outside of coding, I enjoy cycling, hitting the gym, climbing, and hanging out with friends. Not too long ago, I completed a two-year software development program at Östsvenska Yrkeshögskola, Project MÖLK, after which I started developing this page.
                </TextParagraph>
                <TextParagraph>
                    I made this website to share the projects I’m working on and to learn by building a complete site from scratch, including both the frontend and backend.
                    The idea was to start slowly and build the project step by step—beginning with the frontend, then adding authentication, followed by the backend, and finally connecting everything to the database.
                    This project was very informative, allowing me to learn and refresh many important coding concepts along the way.
                </TextParagraph>
                <TextParagraph>
                    From this point onwards, my plan is to keep updating the site with projects I start and complete. 
                    This way, anyone interested can find inspiration and follow my development journey. I’ll also be attaching a GitHub link for each project, so anyone who wants to contribute or offer feedback is more than welcome.
                </TextParagraph>
            </TextParagraphContainer>
        </TextContainer>
    </Container>
  );
}

export default AboutPage;