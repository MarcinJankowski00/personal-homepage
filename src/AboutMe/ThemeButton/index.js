import React from 'react';
import { useTheme } from '../../ThemeContext';
import { Wrapper, Text, ThemeSwitch, IconBackground, StyledIcon } from './styled';

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Wrapper>
            <Text>DARK MODE {theme === "light" ? "OFF" : "ON"}</Text>
            <ThemeSwitch onClick={toggleTheme}>
                <IconBackground isDarkMode={theme === "dark"}>
                    <StyledIcon />
                </IconBackground>
            </ThemeSwitch>
        </Wrapper>
    );
};

export default ThemeButton;