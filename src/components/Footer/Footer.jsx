import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:233-550-735-691'>(+233) 550 735 691</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:contact@providence.leonard@gmail.com'>
            providence.leonard@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time to tranfrom the world
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/ProvLeon'>
            <AiFillGithub size={`3rem`} />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/emmanuellomotey'>
            <AiFillLinkedin size={`3rem`} />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/lomoteyokantah'>
            <AiFillInstagram size={`3rem`} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
