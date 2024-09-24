import React from 'react';
import { useTheme } from '../../ThemeContext';
import { ThemeSwitch, IconBackground, StyledIcon } from './styled';

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemeSwitch onClick={toggleTheme}>
            <IconBackground isDarkMode={theme === "dark"}>
                <StyledIcon />
            </IconBackground>
        </ThemeSwitch>
    );
};

export default ThemeButton;