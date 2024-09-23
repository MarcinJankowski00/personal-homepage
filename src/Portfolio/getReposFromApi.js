import axios from "axios"

export const getReposFromApi = async () => {
  return axios.get('https://api.github.com/users/MarcinJankowski00/repos')
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching repos:", error);
      return [];
    });
};