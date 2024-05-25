import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
    
    </>
  );
};

export default App;
