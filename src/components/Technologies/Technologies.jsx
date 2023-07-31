import React from 'react';
import {
  DiBootstrap,
  DiChrome,
  DiDatabase,
  DiFirebase,
  DiGit,
  DiIonic,
  DiMongodb,
  DiPython,
  DiReact,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web Development World.
      From Back-end to Design (Front-end)
    </SectionText>
    <List>
      <ListItem>
        <DiBootstrap size={'3rem'} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, SASS, SCSS, <br />
            Tailwindcss, Bootstrap, <br /> Framer-Motion and Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size={'3rem'} />
        <ListContainer>
          <ListTitle>JavaScript Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJS and NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={'3rem'} />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size={'3rem'} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size={'3rem'} />
        <ListContainer>
          <ListTitle>AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Deep Learning and <br /> Machine Learning <br />
            (Python, Tensorflow, Keras)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size={'3rem'} />
        <ListContainer>
          <ListTitle>GIT</ListTitle>
          <ListParagraph>
            Experience with <br />
            GitHub, GitLab and Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
