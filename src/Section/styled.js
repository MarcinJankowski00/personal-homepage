import styled from "styled-components";

export const Segment = styled.section`
    margin: 73px 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 16px 58px 0px #090A3308;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.headerunderline};
    padding: 20px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-weight: 900;
`;

export const Content = styled.div`
    padding: 20px;
`;
