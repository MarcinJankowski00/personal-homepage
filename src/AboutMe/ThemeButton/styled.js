import styled from "styled-components";
import { ReactComponent as SunIcon } from "./images/sunIcon.svg"

export const ThemeSwitch = styled.button`
    width: 48px;
    height: 26px;
    border-radius:13px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.switchbackground};
    border: 1px solid ${({ theme }) => theme.color.switchborder};
    padding: 2px;
`;

export const IconBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.switchiconbackground};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${({ isDarkMode }) => (isDarkMode ? 'translateX(22px)' : 'translateX(0)')};
`;

export const StyledIcon = styled(SunIcon)`
    fill: ${({ theme }) => theme.color.switchicon};
`;