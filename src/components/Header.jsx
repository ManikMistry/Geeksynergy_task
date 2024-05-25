import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieList from './MovieList';
import CompanyInfo from './CompanyInfo';
import Footer from './Footer';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  const navigate = useNavigate();

  const handleAccountClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setIsLogin(false);
    setDropdownOpen(false);
    navigate('/signup');  // Redirect to the signup page
  };

  const handleProfile = () => {
    // Handle profile logic here
    setDropdownOpen(false);
  };

  const handleCompanyInfoClick = () => {
    setShowCompanyInfo(true);
  };

  const handleMoviesClick = () => {
    setShowCompanyInfo(false);
  };

  return (
    <>
      <nav className="w-full h-20 bg-blue-400 flex justify-between p-6 sticky top-0 z-50">
        <div className="flex items-center">
          <p className="text-[2em] cursor-pointer text-white" onClick={handleMoviesClick}>Movies</p>
        </div>
        <div className="flex items-center gap-5 px-10 relative">
          <p className="cursor-pointer font-bold uppercase text-sm text-white hover:text-gray-200" onClick={handleMoviesClick}>
            Movie
          </p>
          <p className="cursor-pointer font-bold uppercase text-sm text-white hover:text-gray-200" onClick={handleCompanyInfoClick}>
            Company info
          </p>
          {isLogin ? (
            <div className="relative">
              <div 
                className="cursor-pointer font-bold uppercase text-sm text-white hover:text-gray-200" 
                onClick={handleAccountClick}
              >
                <AccountCircleIcon sx={{ fontSize: '2.5em' }} />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleProfile}
                  >
                    Profile
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="cursor-pointer font-bold uppercase text-sm hover:text-white">
              Sign up
            </p>
          )}
        </div>
      </nav>
      {showCompanyInfo ? <CompanyInfo /> : <MovieList />}
      <Footer/>
    </>
  );
};

export default Header;
