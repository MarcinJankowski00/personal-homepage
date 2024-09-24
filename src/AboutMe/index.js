import { Segment, Photo, Wrapper, Heading, ThisIs, Title, Content, Button, StyledIcon, ThemeSwitchWrapper, Text } from "./styled";
import avatar from "./images/avatar.png"
import ThemeButton from "./ThemeButton";
import { useTheme } from "../ThemeContext";

const AboutMe = () => {
    const { theme } = useTheme();
    return (
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
            <ThemeSwitchWrapper>
                <Text>DARK MODE {theme === "light" ? "OFF" : "ON"}</Text>
                <ThemeButton />
            </ThemeSwitchWrapper>
        </Segment>
    );
}

export default AboutMe;