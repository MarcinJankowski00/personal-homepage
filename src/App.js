import React from 'react';
import Container from "./Container"
import { GlobalStyle } from './globalStyle';
import SkillsetList from './List/SkillsetList';
import WantToLearnListList from './List/WantToLearnList';
import Section from './Section';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Nagłówek H1</h1>
        <p>To jest przykładowy paragraf.</p>
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
