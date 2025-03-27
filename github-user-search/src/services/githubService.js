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

export const fetchAdvancedUserData = async (query, location, minRepos) => {
  let searchQuery = query;
  if (location) {
    searchQuery += `+location:${location}`;
  }
  if (minRepos) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.data.items;
};
