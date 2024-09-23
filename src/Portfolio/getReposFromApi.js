import { Octokit } from "@octokit/rest"
import { accessToken } from "./accessToken";

export const getReposFromApi = async () => {
  const octokit = new Octokit({
    auth: `${accessToken}`,
  })

  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username: 'MarcinJankowski00',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.status) {
      console.error(`Error ${error.status}: ${error.message}`)
      console.error('Unexpected error:', error)
    }
  }
}