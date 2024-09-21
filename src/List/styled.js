
import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 14px;
    margin: 0;
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.textsecondary};
    font-size: 18px;
    &::before {
        content: '•';
        font-size: 24px;
        line-height: 17px;
        position: absolute;
        margin-left: -20px;
        color: ${({ theme }) => theme.color.blue};
    }
`;