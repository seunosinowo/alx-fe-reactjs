import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
