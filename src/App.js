import React from 'react';
import Container from "./Container"
import { GlobalStyle } from './globalStyle';
import SkillsetList from './List/SkillsetList';
import WantToLearnListList from './List/WantToLearnList';
import Section from './Section';
import AboutMe from './AboutMe';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AboutMe />
        <Section 
          title="My skillset includes 🛠️"
          content={<SkillsetList />}
        />
        <Section 
          title="What I want to learn next 🚀"
          content={<WantToLearnListList />}
        />
      </Container>
    </>
  );
}

export default App;
