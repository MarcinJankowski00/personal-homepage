import { Segment, Photo, Wrapper, Heading, ThisIs, Title, Content, Button, StyledIcon } from "./styled";
import avatar from "./images/avatar.png"

const AboutMe = () => (
    <Segment>
        <Photo src={avatar} />
        <Wrapper>
            <Heading>
                <ThisIs>THIS IS</ThisIs>
                <Title>
                    Marcin Jankowski
                </Title>
            </Heading>
            <Content>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities
            </Content>
            <Button href="mailto:marcin5771@gmail.com"><StyledIcon />Hire Me</Button>
        </Wrapper>
    </Segment>
);

export default AboutMe;