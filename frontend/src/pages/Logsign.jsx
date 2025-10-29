import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogSign = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate('/welcome'); // Redirect logged-in users
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      if (!isLogin) {
        // **Signup API Call**
        await axios.post('http://localhost:8000/user/signup', {
          name: data.fullName,
          email: data.email,
          phone: "1234567890",
          password: data.password,
          role: "user",
          licenseNumber: data.licenseNumber || null
        });

        alert("Signup successful! Please login.");
        setIsLogin(true); // Switch to login form
      } else {
        // **Login API Call**
        const response = await axios.post('http://localhost:8000/user/login', {
          email: data.email,
          password: data.password,
        });

        alert("Logged in successfully!");
        localStorage.setItem("token", response.data.data.token);
        console.log( response.data.data.token)
        setIsAuthenticated(true);
        navigate('/welcome'); // Redirect to welcome page instead of home
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // **Logout function**
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to login/signup page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        {isAuthenticated ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Welcome!</h2>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input type="text" {...register('fullName', { required: 'Full name is required' })} className="w-full p-2 mt-1 border rounded"/>
                  {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" {...register('email', { required: 'Email is required' })} className="w-full p-2 mt-1 border rounded"/>
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
              </div>

              <div className="mb-4 relative">
                <label className="block text-gray-700">Password</label>
                <input type={showPassword ? 'text' : 'password'} {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} className="w-full p-2 mt-1 border rounded"/>
                <span className="absolute right-3 top-8 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
                {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>

            <p className="text-center mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span onClick={() => setIsLogin(!isLogin)} className="text-blue-500 cursor-pointer hover:underline ml-1">{isLogin ? 'Sign up' : 'Login'}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LogSign;
