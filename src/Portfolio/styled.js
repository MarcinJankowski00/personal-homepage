import styled from "styled-components";
import { ReactComponent as GhIcon } from "./images/ghIcon.svg"

export const Segment = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 73px 0;
`;

export const StyledIcon = styled(GhIcon)`
    fill: ${({ theme }) => theme.color.blue};
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

export const ReposWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin: 60px 0;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
`;

export const Repo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.textsecondary};
    background-color: ${({ theme }) => theme.color.section};
    box-shadow: 0px 16px 58px 0px #090A3308;
    padding: 50px;
    border: 6px solid ${({ theme }) => theme.color.repoborder};
    border-radius: 5px;
`;

export const Name = styled.h3`
    color: ${({ theme }) => theme.color.reponame};
    margin: 0;
`;


export const Description = styled.div`
    font-size: 18px;
    margin: 30px 0;
`;

export const Links = styled.div`
    font-size: 18px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.blue};
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px solid ${({ theme }) => theme.color.underline};
    &:hover {
        filter: brightness(120%);
    }
`;
