
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import { usersLoader } from './loaders/usersLoader';
import { userLoader } from './loaders/userLoader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} loader={usersLoader} />
        <Route path="/users/:userId" element={<UserDetail />} loader={userLoader} />
      </Routes>
    </Router>
  );
}

export default App;
