import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.data;
};

export const fetchAdvancedUserData = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.data.items;
};
