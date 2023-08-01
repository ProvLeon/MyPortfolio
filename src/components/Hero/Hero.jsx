import React from 'react';

import { heading } from '../../../data';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Span, Span1 } from '../Header/HeaderStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      {heading.map((e) => (
        <>
          <SectionTitle>
            <SectionText
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                // padding: '0 0 2px 0',
              }}
            >
              Hi, I am
              <br />{' '}
            </SectionText>
            <h2
              style={{
                // fontSize: '50px',
                fontWeight: 'bold',
                color: '#d9d9d9',
              }}
            >
              Okantah Lomotey
            </h2>
            <hr style={{ width: '99%' }} />
          </SectionTitle>
          <SectionTitle main center>
            <h3 style={{ padding: '0', width: '40vw' }}>{e.title}</h3>
          </SectionTitle>
          <SectionText>{e.description}</SectionText>
        </>
      ))}
      <Button onClick={() => (window.location = '#about')} primary='true'>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
