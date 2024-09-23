import { useEffect, useState } from "react";
import Error from "./Messages/Error";
import Loading from "./Messages/Loading";
import { getReposFromApi } from './getReposFromApi';
import { Segment, Wrapper, Heading, Title, MyProjects, Content, ReposWrapper, Repo, Name, Description, Links, Link, StyledIcon } from "./styled";

const Portfolio = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            const data = await getReposFromApi();

            if (data && Array.isArray(data)) {
                setRepos(data);
            } else {
                setRepos([]);
            }
            const loadingTimer = setTimeout(() => {
                setLoading(false);
            }, 5000);

            return () => {
                clearTimeout(loadingTimer);
            };
        };
        fetchRepos();
    }, []);

    function formatText(input) {
        let formattedText = input.replace(/-/g, ' ');
        formattedText = formattedText.replace(/react/gi, '').trim();

        if (formattedText.length > 0) {
            formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
        }

        return formattedText;
    }

    return (
        <Segment>
            <Wrapper>
                <Heading>
                    <StyledIcon />
                    <Title>
                        Portfolio
                    </Title>
                    <MyProjects>My recent projects</MyProjects>
                </Heading>
                {
                    !loading ?
                        repos.length > 0 ?
                            <ReposWrapper>
                                {
                                    repos.map((repo) => (

                                        <Repo key={repo.id}>
                                            <Name>{formatText(repo.name)}</Name>
                                            <Description>
                                                {repo.description}
                                            </Description>
                                            <Links>
                                                Code: <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">Link to Code</Link><br />
                                                Demo: <Link href={`https://marcinjankowski00.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer">Link to Demo</Link>
                                            </Links>
                                        </Repo>
                                    ))
                                }
                            </ReposWrapper>

                            : (
                                <Content>
                                    <Error />
                                </Content>
                            )
                        :
                        <Content>
                            <Loading />
                        </Content>
                }
            </Wrapper>
        </Segment>
    );
}

export default Portfolio;