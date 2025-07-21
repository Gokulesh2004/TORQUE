import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import logo from '/TORQUE/torque/src/assets/TORQUELOGO.jpeg';
import video from '/TORQUE/torque/src/assets/bgm.mp4';
import google from '/TORQUE/torque/src/assets/google.png';
import image from '/TORQUE/torque/src/assets/facebook.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(''); // For storing API errors
  const [loading, setLoading] = useState(false); // For loading state

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleLogin = async () => {
    if (emailError || passwordError || !email || !password) {
      return; // Prevent login attempt if there are validation errors
    }
  
    setLoading(true);
  
    // Check for hardcoded credentials (for testing purposes)
    if (email === 'gokul128@gmail.com' && password === 'Gokul@128') {
      localStorage.setItem('authToken', 'dummy-token'); // You can set an actual JWT token here after successful authentication
      window.location.href = '/home';
      alert('Login successful!');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:9000/authenticate', {
        email,
        password,
      });
  
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/home';
        alert('Login successful!');
      } else {
        setLoginError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex w-1/2 items-center justify-center relative z-10 p-10">
        <div className="text-left">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Torque Logo" className="h-40 w-80 mb-4" />
            <h1 className="text-5xl font-extrabold text-white">
              WELCOME TO TORQUE HUB
            </h1>
          </div>
          <p className="text-xl text-white font-bold-200 leading-relaxed">
            Experience the Thrill of the Ride and the Power of Community! <br />
            <br />
            Welcome to{' '}
            <span className="text-yellow-400  font-semibold">Torque</span> – the
            ultimate destination for bikers and car enthusiasts. Whether you’re
            a seasoned rider, a car aficionado, or just beginning your journey,
            Torque Hub is the place where passion meets performance. Connect
            with like-minded individuals who share your love for speed, style,
            and everything automotive.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-end relative z-10 p-20">
        <div className="bg-gray-300 bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800"> LOGIN</h1>
          </div>
          {loginError && (
            <div className="text-red-500 text-sm mb-4">{loginError}</div>
          )}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="on"
              />
              {emailError && (
                <p className="mt-2 text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="on"
              />
              {passwordError && (
                <p className="mt-1 text-red-500 text-sm">{passwordError}</p>
              )}
              <a
                href="/forgotpassword"
                className="block text-right text-blue-500 hover:underline text-sm mt-2"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                className={`w-full py-2 px-4 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  emailError || passwordError || loading
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={handleLogin}
                disabled={emailError || passwordError || loading}
              >
                {loading ? 'Logging in...' : 'Sign in'}
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-600">Or sign in with</span>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center focus:outline-none"
                title="Google"
                style={{
                  backgroundImage: `url(${google})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => {
                  // Google sign-in logic here
                }}
              ></button>
              <a
                href="https://open.larksuite.com/connect/qrconnect/page/sso"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center focus:outline-none"
                title="facebook"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
