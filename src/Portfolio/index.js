import Error from "./Messages/Error";
import Loading from "./Messages/Loading";
import { Segment, Wrapper, Heading, Title, MyProjects, Content, StyledIcon } from "./styled";

const Portfolio = () => (
    <Segment>
        <Wrapper>
            <Heading>
                <StyledIcon />
                <Title>
                    Portfolio
                </Title>
                <MyProjects>My recent projects</MyProjects>
            </Heading>
            <Content>
                <Error />
            </Content>
        </Wrapper>
    </Segment>
);

export default Portfolio;