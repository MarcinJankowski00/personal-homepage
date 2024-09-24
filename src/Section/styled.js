import styled from "styled-components";

export const Segment = styled.section`
    margin: 73px 0;
    background-color: ${({ theme }) => theme.color.section};
    box-shadow: 0px 16px 58px 0px #090A3308;
    border-radius: 5px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        margin-bottom: 50px;
        margin-top: 0;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    margin: 0;
`;

export const Title = styled.h2`
    border-bottom: 2px solid ${({ theme }) => theme.color.headerunderline};
    margin: 0 32px;
    padding: 32px 0;
    font-weight: 900;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        font-size: 18px;
        margin: 0 16px;
        padding: 16px 0;
    }
`;

export const Content = styled.div`
    padding: 32px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        padding: 0 16px;
    }
`;
