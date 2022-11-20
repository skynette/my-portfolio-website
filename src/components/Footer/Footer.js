import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 234-818-233-6574'>234-818-233-6574</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: cutejosh2@gmail.com'>cutejosh2@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/skynette'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/joshua-hassan-01b443179/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/cut3josh'>
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
