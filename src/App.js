import React from 'react';
import { ThemeProvider } from "styled-components";
import Container from "./Container"
import { GlobalStyle } from './globalStyle';
import SkillsetList from './List/SkillsetList';
import WantToLearnListList from './List/WantToLearnList';
import Section from './Section';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from './theme';

function App() {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  console.log('Aktualny motyw:', theme);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Container>
          <AboutMe/>
          <Section
            title="My skillset includes 🛠️"
            content={<SkillsetList />}
          />
          <Section
            title="What I want to learn next 🚀"
            content={<WantToLearnListList />}
          />
          <Portfolio />
          <Contact />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
