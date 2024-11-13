import React, { createContext, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthContext = createContext();
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    setUser({ email });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      login(email, password);
      navigate('/');
    }
  };

  const gotoSignup = () => {
    navigate('/signup');
  };

  const gotoForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  return (
    <div className='authpage'>
      <div className='authcont'>
        <img 
          src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
          alt='login' 
        />
        <form className='authform' onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <div className='formgroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='formgroup'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <Link to='/forgotpassword' className='stylenone'>
            <p onClick={gotoForgotPassword}>Forgot password?</p>
          </Link>
          <button className='btn' type='button' onClick={handleLogin}>Login</button>
          <h2 className='or'>OR</h2>
          <button className='btn' type='button' onClick={gotoSignup}>Signup</button>
        </form>
      </div>
    </div>
  );
};

// Wrap the Login component with the AuthProvider
const AuthPage = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default AuthPage;
