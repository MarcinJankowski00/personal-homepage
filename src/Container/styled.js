import styled from "styled-components";

export const Main = styled.main`
    max-width: 1216px;
    padding: 40px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        padding: 20px;
    }
`;