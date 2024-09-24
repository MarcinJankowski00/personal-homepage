
import styled from "styled-components";
import { ReactComponent as MailIcon } from "./images/mailIcon.svg"

export const Segment = styled.div`
    display: flex;
    align-items: center;
    margin: 73px 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr 1.08fr;
        margin-bottom: 50px;
        margin-top: 20px;
    }
`;

export const Photo = styled.img`
    border-radius: 50%;
    margin-right: 60px;
    width: 100%;
    max-width: 384px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-right: 0;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`;

export const Wrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }
`;

export const Heading = styled.div`

`;

export const ThisIs = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.textsecondary};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        margin-bottom: 0;
        margin-top: 10px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: 900;
    line-height: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
      font-size: 22px;
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.color.textsecondary};
    margin: 40px 0;
    font-weight: 400;
    text-align: left;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        margin-top: 10px;
        margin-bottom: 20px;
    }
`;

export const Button = styled.a`
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    display: inline-flex;
    text-decoration: none;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        filter: brightness(120%);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        font-size: 18px;
    }
`;

export const StyledIcon = styled(MailIcon)`
    margin-right: 16px;
`;

export const ThemeSwitchWrapper = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 12px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        margin-left: auto;
    }
`;

export const Text = styled.div`
    width: 100px;
    font-weight: 600;
    margin-right: 5px;
    letter-spacing: 0;
    color: ${({ theme }) => theme.color.textsecondary};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        display: none;
    }
`;