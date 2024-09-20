
import styled from "styled-components";

export const Segment = styled.section`
    margin: 73px 0;
    max-width: 691px;
`;

export const Heading = styled.div`

`;

export const LetsTalk = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.textsecondary};
`;

export const Mail = styled.a`
    font-size: 32px;
    font-weight: 900;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.color.blue};
    }
`;

export const Content = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0;
    line-height: 28px;
    text-align: left;
`;

export const Icons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export const StyledLink = styled.a`
    display: inline-block;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 40px;
        height: 40px;
        fill: ${({ theme }) => theme.color.font};
        transition: fill 0.3s ease;

        &:hover {
            fill: ${({ theme }) => theme.color.blue};
        }
    }
`;