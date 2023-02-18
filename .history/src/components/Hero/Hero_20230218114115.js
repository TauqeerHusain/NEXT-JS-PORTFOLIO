import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponent";
import Button from "../../styles/GlobalComponent/Button";
import { LeftSection } from "./HeroStyle";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, My name is Tauqeer Hussain and I have been learning web
          development since 2 years and very much dedicated to make myself gear
          up with some professional skills. Frontend Developer with high level
          of experience in web designing and development, producting the Quality
          work.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
