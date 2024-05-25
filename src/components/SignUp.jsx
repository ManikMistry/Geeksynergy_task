// src/components/Signup.jsx
import { TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupSVG from '../assets/20547283_6310507.jpg'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value !== '') {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        newErrors[key] = `Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem('user', JSON.stringify(formData));
      navigate('/login');
    }
  };

  return (
    <>
    <nav className="w-full h-20 bg-blue-400 flex items-center p-6 sticky top-0 z-50">
      <p className=' text-white text-3xl font-bold'>Sign Up</p>
    </nav>
    <div className="flex items-center justify-between h-[100%] px-60 pt-10">
    <form onSubmit={handleSubmit} className=" p-8 w-[700px]">
        <h2 className="text-4xl mb-6 text-start">Let&apos;s create your account!</h2>
        <div className="mb-4">
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Phone"
            variant="outlined"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <FormControl variant="outlined" fullWidth error={!!errors.profession}>
            <InputLabel>Profession</InputLabel>
            <Select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              label="Profession"
            >
              <MenuItem value=""><em>Select Profession</em></MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.profession && <FormHelperText>{errors.profession}</FormHelperText>}
          </FormControl>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 text-xl hover:bg-blue-600 rounded">Signup</button>
        <p className=' py-4 px-4'>Already have an account! <Link className=' text-blue-500' to={"/login"}>Login</Link></p>
      </form>
      <div className=''>
        <img src={SignupSVG} alt='' className='h-[700px]'/>
      </div>

    </div>
    </>
  );
};

export default Signup;
