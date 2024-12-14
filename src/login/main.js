import React, { useState } from 'react';
import logo from '../logos/black.png';
import './main.css';
import googlelogo from '../logos/google.webp';
import apple from '../logos/apple.png';
import { useNavigate } from 'react-router-dom';

export default function MainLogin() {
  const history = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const handleSignUp = () => {
    history('/Main');
  };

  return (
    <>
      <div className="container">
        <div className='container2'>
          <img src={logo} alt='logo' />
        </div>
        <div className='container3'>
          <h1 className='welcome'>Welcome to the world of Young Coaches!</h1>
          <h2>Sign up</h2>
          <button onClick={handleSignUp} className='googleSign'>
            <img src={googlelogo} alt='google' id='signup' /> Sign up with Google
          </button>
          <button onClick={handleSignUp} className='googleSign'>
            <img src={apple} alt='apple' id='apple' /> Sign up with Apple
          </button>
          <button className='createAccount' onClick={toggleSignUp}>
            Create an account
          </button>
          <div>
            <p>Already have an account?</p>
            <button className='login' onClick={toggleLogin}>
              Login
            </button>
          </div>
        </div>

        {/* Sign Up Popup */}
        {showSignUp && (
          <div className='popup show'>
            <div className='popup-content'>
              <h2>Sign Up</h2>
              <form>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Sign Up</button>
              </form>
              <button className='close' onClick={toggleSignUp}>Close</button>
            </div>
          </div>
        )}

        {/* Login Popup */}
        {showLogin && (
          <div className='popup show'>
            <div className='popup-content'>
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
              </form>
              <button className='close' onClick={toggleLogin}>Close</button>
            </div>
          </div>
        )}
      </div>

      <footer className='footer'>
        <p>© 2024 Tactics Community. All rights reserved.</p>
        <p>
          <a href='/terms'>Terms of Service</a> | <a href='/privacy'>Privacy Policy</a>
        </p>
      </footer>
    </>
  );
}
