
import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0;
    padding: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        grid-gap: 7px;
    }
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.textsecondary};
    font-size: 18px;
    line-height: 17px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
    }
    &::before {
        content: '•';
        font-size: 24px;
        line-height: 17px;
        position: absolute;
        margin-left: -20px;
        color: ${({ theme }) => theme.color.blue};
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 18px;
        }
    }
`;