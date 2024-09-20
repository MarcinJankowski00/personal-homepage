
import styled from "styled-components";
import { ReactComponent as MailIcon } from "./images/mailIcon.svg"

export const Segment = styled.section`
    display: flex;
    align-items: center;
    margin: 73px 0;
    max-width: 1089px;
`;

export const Photo = styled.img`
    border-radius: 50%;
    margin-right: 60px;
    width: 100%;
    max-width: 384px;
`;

export const Wrapper = styled.div`

`;

export const Heading = styled.div`

`;

export const ThisIs = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.textsecondary};
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: 900;
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.color.textsecondary};
    margin: 40px 0;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
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
`;

export const StyledIcon = styled(MailIcon)`
    margin-right: 16px;
`;