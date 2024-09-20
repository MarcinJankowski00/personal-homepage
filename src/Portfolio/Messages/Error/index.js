import { StyledIcon, Title, Content, Button } from "./styled";

const Error = () => (
    <>
        <StyledIcon />
        <Title>
            Ooops! Something went wrong...
        </Title>
        <Content>
            Sorry, failed to load Github projects.
            You can check them directly on Github.
        </Content>
        <Button href="https://github.com/MarcinJankowski00" target="_blank">
            Go to Github
        </Button>
    </>
);

export default Error;