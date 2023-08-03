import React from 'react';

import { heading } from '../../../data';
import {
  Section1,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section1 row nopadding>
    <LeftSection>
      {heading.map((e) => (
        <>
          <SectionTitle>
            <SectionText
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '0 0 5px 0',
              }}
            >
              Hi, I am
              <br />{' '}
              <h2
                style={{
                  top: '20px',
                  fontSize: '50px',
                  fontWeight: 'bold',
                  color: '#d9d9d9',
                }}
              >
                Okantah
              </h2>
            </SectionText>
            {/* <hr style={{ width: '99%' }} /> */}
          </SectionTitle>
          <SectionTitle main center>
            <h3 style={{ padding: '0' }}>{e.title}</h3>
          </SectionTitle>
          <SectionText>
            {e.description}
            <h4 style={{ color: '#d9d9d0', padding: '10px 0 0px 0' }}>
              {e.small}
            </h4>
          </SectionText>
        </>
      ))}
      <Button
        onClick={() => (window.location = '#about')}
        primary='true'
        style={{ paddingBottom: '5px' }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section1>
);

export default Hero;
