import styled from '@emotion/styled';
import usePageTitle from '../hooks/usePageTitle';

const AboutContainer = styled.div`
  margin-left: 300px;
  padding: 2rem;
`;

const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutDiv = styled.div`
  max-width: 800px;
`;

const BodyParagraph = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const GridIllustration = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1rem;
`;

const HighlightSpan = styled.span`
  font-weight: bold;
`;

const About = () => {
  usePageTitle('About - Arin P.');

  return (
    <AboutContainer>
      <FlexBlock>
        <AboutDiv>
          <BodyParagraph>Work</BodyParagraph>
          <GridIllustration>
            {/* Add your work grid items here */}
          </GridIllustration>
        </AboutDiv>
        
        <AboutDiv>
          <ProfileImage 
            src="https://cdn.prod.website-files.com/6379e0162913f9848d3be654/657357a2ed2b085995153385_Screenshot%202023-12-08%20at%2012.51.06%20PM.png"
            alt="Arin's profile"
            loading="lazy"
          />
          <p>
            I design with the intention to <HighlightSpan>provoke meaningful conversations & craft meaningful experiences</HighlightSpan> around the way people engage with each other, technology, and our future.
            <br/><br/>
            I'm currently pursuing Fine Arts + HCI majors at Carnegie Mellon University (CMU). I was previously part of a startup as the Product Lead & Designer. I'm also the co-president of the CMU Futurist Club, exploring the future of Play and LEGO with various stakeholders.
            <br/><br/>
            I am particularly interested in experience design, motion design, strategic thinking, and games.
          </p>
        </AboutDiv>
        
        <AboutDiv>
          <BodyParagraph>Life</BodyParagraph>
          <GridIllustration>
            {/* Add your life grid items here */}
          </GridIllustration>
        </AboutDiv>
      </FlexBlock>
    </AboutContainer>
  );
};

export default About; 