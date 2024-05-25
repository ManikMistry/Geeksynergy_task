import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import SignIn from '../assets/14562381_5500661.jpg';

const Login = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (e.target.value !== '') {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    Object.keys(credentials).forEach((key) => {
      if (credentials[key] === '') {
        newErrors[key] = `Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Your existing authentication logic here
      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log('Stored User:', storedUser);
      console.log('Entered Credentials:', credentials);

      if (storedUser && storedUser.name === credentials.name && storedUser.password === credentials.password) {
        navigate('/home');
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <>
      <nav className="w-full h-20 bg-blue-400 flex items-center p-6 sticky top-0 z-50">
        <p className='text-white text-3xl font-bold'>Login</p>
      </nav>
      <div className="flex items-center justify-between h-[100%] px-60 pt-10">
        <form onSubmit={handleSubmit} className="p-8 w-[700px]">
          <h2 className="text-4xl mb-3 text-start">Welcome back!</h2>
          <p className="mb-1">Let&apos;s explore the movies</p>
          <div className="mb-4">
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              fullWidth
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 text-xl hover:bg-blue-600 rounded">Login</button>
          <p className='py-4 px-4'>Don&apos;t have an account? <Link className='text-blue-500' to={"/signup"}>Sign Up</Link></p>
        </form>
        <div>
          <img src={SignIn} alt='' className='h-[700px]' />
        </div>
      </div>
    </>
  );
};

export default Login;
