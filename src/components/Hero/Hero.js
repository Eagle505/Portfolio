import React from 'react';
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer i can do both web and mobile applications  
      </SectionText>
      <Link href='#about'>
      <a>
      <Button>Learn More</Button>

      </a>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;