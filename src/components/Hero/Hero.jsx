import React from 'react';

import { heading } from '../../../data';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      {heading.map((e) => (
        <>
          <SectionTitle main center>
            <h3 style={{ width: '40vw' }}>{e.title}</h3>
          </SectionTitle>
          <SectionText>{e.description}</SectionText>
        </>
      ))}
      <Button
        onClick={() => (window.location = 'https://google.com')}
        primary='true'
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
