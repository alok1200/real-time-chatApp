import { Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div>
      <Routes className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
        <Router path="/" element={<HomePage />} />
        <Router path="/login" element={<LoginPage />} />
        <Router path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
