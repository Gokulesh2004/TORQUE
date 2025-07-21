import React, { useState } from 'react';
import axios from 'axios';
import logo from '/TORQUE/torque/src/assets/TORQUELOGO.jpeg';
import video from '/TORQUE/torque/src/assets/bgm.mp4';
import google from '/TORQUE/torque/src/assets/google.png';
import image from '/TORQUE/torque/src/assets/facebook.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length < 3) {
      setUsernameError('Username must be at least 3 characters long.');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6 || value.length > 20) {
      setPasswordError('The password must be between 6-20 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSignup = async () => {
    if (
      usernameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:9000/sign-up', {
        name: username,
        email,
        password,
      });

      if (response.status === 201) {
        alert('User registered successfully!');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex w-1/2 items-center justify-center relative z-10 p-10">
        <div className="text-left">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Torque Logo" className="h-40 w-80 mb-4 p-5" />
            <h1 className="text-5xl font-extrabold text-white">JOIN TORQUE HUB</h1>
          </div>
          <p className="text-xl text-bold text-white leading-relaxed">
            Be part of the ultimate destination for bikers and car enthusiasts! <br /><br />
            Join <span className="text-black font-semibold">Torque</span> and connect with a community that shares your passion for speed, style, and all things automotive.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-end relative z-10 p-20">
        <div className="bg-gray-300 bg-opacity-70 p-10 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">REGISTER</h1>
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  usernameError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                autoComplete="on"
              />
              {usernameError && <p className="mt-2 text-red-500 text-sm">{usernameError}</p>}
            </div>
            <div>
              <input
                type="text"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="on"
              />
              {emailError && <p className="mt-2 text-red-500 text-sm">{emailError}</p>}
            </div>
            <div>
              <input
                type="password"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="on"
              />
              {passwordError && <p className="mt-1 text-red-500 text-sm">{passwordError}</p>}
            </div>
            <div>
              <input
                type="password"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  confirmPasswordError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                autoComplete="on"
              />
              {confirmPasswordError && <p className="mt-1 text-red-500 text-sm">{confirmPasswordError}</p>}
            </div>
            <div>
              <button
                className={`w-full py-2 px-4 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  usernameError || emailError || passwordError || confirmPasswordError ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleSignup}
                disabled={usernameError || emailError || passwordError || confirmPasswordError}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-600">Already have an account? </span>
            <a href="/login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-600">Or sign up with</span>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center focus:outline-none"
                title="Google"
                style={{ backgroundImage: `url(${google})`, backgroundSize: 'cover'}}
              ></button>
              <a
                href="https://open.larksuite.com/connect/qrconnect/page/sso"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center focus:outline-none"
                title="Facebook"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
