import styled from "styled-components";
import { ReactComponent as GhIcon } from "./images/ghIcon.svg"

export const Segment = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 73px 0;
    max-width: 1089px;
`;

export const StyledIcon = styled(GhIcon)`
    color: ${({ theme }) => theme.color.blue};
`;

export const MyProjects = styled.div`

`;

export const Wrapper = styled.div`

`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ThisIs = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.textsecondary};
`;

export const Title = styled.h2`
    margin: 12px 0;
    font-weight: 900;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
`;
