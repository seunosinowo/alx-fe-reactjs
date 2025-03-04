import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost'; // Import BlogPost component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="/profile/*" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add new route */}
      </Routes>
    </Router>
  );
}

export default App;