import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const users = await fetchAdvancedUserData(query, location, minRepos);
    setResults(users);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter minimum repositories"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      <div className="mt-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded mb-2">
            <p><strong>Username:</strong> {user.login}</p>
            <p><strong>Location:</strong> {user.location || 'N/A'}</p>
            <p><strong>Repositories:</strong> {user.public_repos || 'N/A'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
