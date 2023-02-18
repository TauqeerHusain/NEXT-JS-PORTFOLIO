import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import AiFillContacts from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyle";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link
          href="https://drive.google.com/file/d/1YTLpUzAsrwTcbbU-lG84VW3kbosTGqxQ/view?usp=sharing"
          target="_blank"
        >
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/TauqeerHusain">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tauqeer-husain-914a88258/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/husain_tauqeer/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1YTLpUzAsrwTcbbU-lG84VW3kbosTGqxQ/view?usp=sharing">
        <AiFillContacts size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
