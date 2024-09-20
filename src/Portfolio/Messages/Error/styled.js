import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../images/errorIcon.svg"

export const StyledIcon = styled(ErrorIcon)`

`;

export const Title = styled.h3`

`;

export const Content = styled.div`
    max-width: 410px;
    text-align: center;
    margin-bottom: 30px;
`;

export const Button = styled.a`
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        filter: brightness(110%);
    }
`;