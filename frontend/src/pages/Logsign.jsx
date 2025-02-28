import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LogSign = () => {
  const [isLogin, setIsLogin] = useState(false); // Start with signup view
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // For navigation

  const onSubmit = (data) => {
    console.log(data);

    // Simulate a successful signup and navigate to the welcome page
    if (!isLogin) {
      // Logic for signup (you can add your signup API call here)
      alert('Signed up successfully!');
      // Automatically log in after signup for demo purposes
      navigate('/welcome', { state: { name: data.fullName || 'User' } });
    } else {
      // Logic for login (you can add your login API call here)
      alert('Logged in successfully!');
      navigate('/welcome', { state: { name: data.fullName || 'User' } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-gray-500 to-gray-800">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md bg-gradient-to-r from-gray-200 to-gray-400">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            />
            <span
              className="absolute inset-y-0 right-3 top-8 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          {!isLogin && (
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('confirmPassword', { required: 'Please confirm your password' })}
              />
              <span
                className="absolute inset-y-0 right-3 top-8 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </span>
              {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer hover:underline ml-1"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogSign;
