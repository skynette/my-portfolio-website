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
      <Button onClick={()=> window.location="https://drive.google.com/file/d/1oz3ChJWhZG6k-5lzr2AvMqhf6uyFW-nV/view?usp=share_link"}>my resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;