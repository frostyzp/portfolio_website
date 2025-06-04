import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import React, { useRef } from 'react';

const SIDEBAR_WIDTH = '18vw';

const ImageTextContainerTitle = styled.div`
  margin-bottom: 0.4rem;
  font-family: 'CommitMono';
  text-transform: uppercase;
  font-size: 0.7rem;
`;

const Content = styled.div`
  margin-left: calc(${SIDEBAR_WIDTH} + 2rem);
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ImageTextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3.5rem 2rem;
  margin-bottom: 0.8rem;

  // img, video {
  //   width: 100%;
  //   height: 40vh;
  //   object-fit: cover;
  //   display: block;
  //   border-radius: 8px;
  //   border: 1px solid var(--border-color);
  //   scale: 1;
  //   opacity: 1;
  //   transition: 500ms cubic-bezier(0.1, 1, 0.2, 1);
  //   @media (max-width: 600px) {
  //     height: 10rem;
  //   }
  // }

  // a:hover {
  //   img, video {
  //     scale: 1.02;
  //     opacity: 0.75;
  //     rotate: 1deg;
  //     box-shadow: 15px 0 15px rgba(191, 187, 197, 0.15),
  //                 -15px 0 15px rgba(233, 205, 255, 0.15);
  //     transform: perspective(1000px) 
  //               rotateY(calc(var(--mouse-x, 0) * 4deg))
  //               rotateX(calc(var(--mouse-y, 0) * -4deg))
  //               skew(calc(var(--mouse-x, 0) * 1deg), 
  //                    calc(var(--mouse-y, 0) * 1deg));
  //   }
  }
`;

const ImageText = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 0.4rem;

  p:first-of-type {
    flex: 0 0 20%;
  }

  p:last-of-type {
    flex: 0 0 80%;
  }
`;

const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: 2rem;
  width: 100%;
  margin: 3rem 0;
  @media (max-width: 1100px) {
    column-count: 2;
  }
  @media (max-width: 700px) {
    column-count: 1;
  }
`;

const MasonryImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  height: 16rem;
`;

const MasonryText = styled.p`
  padding: 1rem;
  font-size: 1rem;
  margin: 0;
`;

const MasonryItem = styled(Link)`
  display: inline-block;
  width: 100%;
  margin-bottom: 2rem;
  break-inside: avoid;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
`;

// Helper for hover styles
const getHoverStyles = (noHover) => {
  if (noHover) {
    // Only opacity changes on hover
    return `
      a:hover img,
      a:hover video {
        opacity: 0.90;
        cursor: default;
      }
    `;
  } else {
    // Full interactive hover effect
    return `
      a:hover img,
      a:hover video {
        scale: 1.02;
        opacity: 0.85;
        rotate: 1deg;
        box-shadow: 15px 0 15px rgba(191, 187, 197, 0.15),
                    -15px 0 15px rgba(233, 205, 255, 0.15);
        transform: perspective(1000px)
          rotateY(calc(var(--mouse-x, 0) * 2deg))
          rotateX(calc(var(--mouse-y, 0) * -2deg))
          skew(calc(var(--mouse-x, 0) * 1deg), calc(var(--mouse-y, 0) * 1deg));
      }
    `;
  }
};

const ImageTextContainerGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr'};
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  align-items: stretch;

  img, video {
    width: 100%;
    height: 48vh;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    scale: 1;
    opacity: 1;
    transition: 500ms cubic-bezier(0.1, 1, 0.2, 1);
    @media (max-width: 600px) {
      height: 10rem;
    }
  }

  ${({ noHover }) => getHoverStyles(noHover)}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyRowContainer = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;

  img, video {
    width: 100%;
    height: 48vh;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    scale: 1;
    opacity: 1;
    transition: 500ms cubic-bezier(0.1, 1, 0.2, 1);
  }

  &:hover img,
  &:hover video {
    scale: 1.02;
    opacity: 0.85;
    rotate: 1deg;
    box-shadow: 15px 0 15px rgba(191, 187, 197, 0.15),
                -15px 0 15px rgba(233, 205, 255, 0.15);
    transform: perspective(1000px)
      rotateY(calc(var(--mouse-x, 0) * 2deg))
      rotateX(calc(var(--mouse-y, 0) * -2deg))
      skew(calc(var(--mouse-x, 0) * 1deg), calc(var(--mouse-y, 0) * 1deg));
  }
`;

const CaseStudyCell = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  height: 100%;
`;

const CaseStudyRow = ({ to, children }) => <CaseStudyRowContainer to={to}>{children}</CaseStudyRowContainer>;

// Helper HOC for interactive links
function InteractiveLink({ children }) {
  return <span style={{ cursor: 'default' }}>{children}</span>;
}

const Home = () => {
  usePageTitle('Arin Pantja');

  return (
    <Content>
      <ImageTextContainerTitle>PLAY AREA</ImageTextContainerTitle>

      <ImageTextContainerGrid columns="1fr">
        <InteractiveLink>
          <ImageText to="/title3">
            <video src="/case-studies/nam_lhi.mp4" autoPlay loop muted />
            <TextRow>
            </TextRow>
          </ImageText>
        </InteractiveLink>
      </ImageTextContainerGrid>


{/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <hr className="divider2" />
      {/* <ImageTextContainerTitle>INTERACTION DESIGN</ImageTextContainerTitle> */}

      {/* Case Studies: 25/25/50 row layout */}
      <div>
        <CaseStudyRow to="/roster-monster">
          <CaseStudyCell>
            <p>Roster Monster</p>
            <p>Reducing 1 week's worth of effort into hours of roster planning through automation feedback</p>
          </CaseStudyCell>
          <div>
            <video src="/main_img/ogp_main.mp4" autoPlay loop muted />
          </div>
        </CaseStudyRow>
        <CaseStudyRow to="/kura-kura">
          <CaseStudyCell>
            <p>Kura Kura</p>
            <p>A playful, localised AI-driven journaling tool for emotional wellness amongst youths</p>
          </CaseStudyCell>
          <div>
            <video src="/main_img/kurakura_main.mp4" autoPlay loop muted />
          </div>
        </CaseStudyRow>
        <CaseStudyRow to="/title3">
          <CaseStudyCell>
            <p>Illustration Guidelines</p>
            <p>Streamlining illustration craft through guidelines for Singapore government products</p>
          </CaseStudyCell>
          <div>
            <img src="/case-studies/byos.png" alt="Illustration Guidelines" />
          </div>
        </CaseStudyRow>
      </div>



{/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <hr className="divider2" />
      {/* <ImageTextContainerTitle>WEB / CODE</ImageTextContainerTitle> */}

      {/* 2/3 and 1/3 split */}
      <ImageTextContainerGrid columns="2fr 1fr" noHover>
        <InteractiveLink>
          <ImageText to="">
            <video src="/case-studies/tcsc.mp4" autoPlay loop muted />
            <TextRow>
              {/* <p>TCSC</p>
              <p>CMS built website </p> */}
            </TextRow>
          </ImageText>
        </InteractiveLink>
        <InteractiveLink>
          <ImageText to="">
          <img src="/case-studies/cuddly.gif" />
          <TextRow>
              {/* <p>Pha Lai Nam Lhai</p>
              <p>Translating a traditional Thai weaving pattern into a color font</p> */}
            </TextRow>
          </ImageText>
        </InteractiveLink>
      </ImageTextContainerGrid>

{/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}

      {/* 1/3 and 2/3 split */}
      <ImageTextContainerGrid columns="1fr 2fr" noHover>
        <InteractiveLink>
          <ImageText to="">

            <TextRow>
 
            </TextRow>
            <img src="/case-studies/ddr lite.gif" />
          </ImageText>
        </InteractiveLink>
        <InteractiveLink>
          <ImageText to="">
          <TextRow>
          <video src="/case-studies/nam_lhai.mp4" autoPlay loop muted />

            </TextRow>
          </ImageText>
        </InteractiveLink>
      </ImageTextContainerGrid>


      {/* 3 different columns ... */}
      <ImageTextContainerGrid columns="1fr 1fr 1fr" noHover>
        <InteractiveLink>
          <ImageText to="">
          <video src="/case-studies/oracle 2.mov" autoPlay loop muted />
            <TextRow>
 
            </TextRow>
          </ImageText>
        </InteractiveLink>
        <InteractiveLink>
          <ImageText to="">
          <video src="/case-studies/skipping 3.mov" autoPlay loop muted />

          <TextRow>
            </TextRow>
          </ImageText>
        </InteractiveLink>
        <InteractiveLink>
          <ImageText to="">
          <video src="/case-studies/graveyard 2.mov" autoPlay loop muted />

          <TextRow>

            </TextRow>
          </ImageText>
        </InteractiveLink>
      </ImageTextContainerGrid>

        {/* 2/3 and 1/3 split */}
        <ImageTextContainerGrid columns="2fr 1fr" noHover>
        <InteractiveLink>
          <ImageText to="">
            <img src="/case-studies/unity_recorder.gif" />
            <TextRow>
              {/* <p>TCSC</p>
              <p>CMS built website </p> */}
            </TextRow>
          </ImageText>
        </InteractiveLink>
        <InteractiveLink>
          <ImageText to="">
          <video src="/case-studies/campfire_full_2.mov" autoPlay loop muted />
          <TextRow>
              {/* <p>Pha Lai Nam Lhai</p>
              <p>Translating a traditional Thai weaving pattern into a color font</p> */}
            </TextRow>
          </ImageText>
        </InteractiveLink>
      </ImageTextContainerGrid>


      <footer> 
        <p>Arin Pantja 2025</p>
        <p>⸜( ´ ꒳ ` )⸝	 Last updated May 2025</p>
      </footer>


    </Content>
  );
};

export default Home; 