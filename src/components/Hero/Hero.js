import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Joshua Hassan <br/>
        Web Developer.
      </SectionTitle>
      <SectionText>
        Fullstack web Developer leaning towards backend development.
      </SectionText>
      <Button onClick={()=> window.location="http://google.com"}>my resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;