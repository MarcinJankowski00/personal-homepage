import { Segment, Heading, LetsTalk, Mail, Content, Icons, StyledLink } from "./styled";
import { ReactComponent as InIcon } from "./images/inIcon.svg"
import { ReactComponent as GhIcon } from "./images/ghIcon.svg"

const Contact = () => (
    <Segment>
        <Heading>
            <LetsTalk>LET'S TALK</LetsTalk>
            <Mail href="mailto:marcin5771@gmail.com">
                marcin5771@gmail.com
            </Mail>
        </Heading>
        <Content>
            I’m always open to new projects whenever I have the time.
            If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life,
            feel free to contact me 🤞
        </Content>
        <Icons>
            <StyledLink href="https://github.com/MarcinJankowski00" target="_blank" rel="noopener noreferrer"><GhIcon /></StyledLink>
            <StyledLink href="https://www.linkedin.com/in/marcin-jankowski-17096332b/" target="_blank" rel="noopener noreferrer"><InIcon /></StyledLink>
        </Icons>
    </Segment>
);

export default Contact;