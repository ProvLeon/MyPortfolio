import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode, DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';
import Image from 'next/image';

const Header = () => (
  <Container style={{ justifyContent: 'space-between' }}>
    <Div1>
      <Link
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginLeft: '80px',
          gap: '5px',
        }}
      >
        <DiCode style={{ height: '50', width: '50' }} />
        <Span>Okantah</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#tech'}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#about'}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/ProvLeon'>
        <AiFillGithub size={`3rem`} />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/emmanuellomotey'>
        <AiFillLinkedin size={`3rem`} />
      </SocialIcons>
      <SocialIcons href='https://instagram.com/lomoteyokantah'>
        <AiFillInstagram size={`3rem`} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
