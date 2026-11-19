import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email/username and password.');
      return;
    }

    login(email, password);
    navigate('/');
  };

  return (
    <div className="login-page">

      {/* Page Header */}
      <div className="login-header">
        <PageHeader
          title="Welcome Back"
          subtitle="Log in to access your saved tips, followed tipsters, and store points"
        />
      </div>

      {/* Login Card */}
      <div className="login-card be-card">

        {error && (
          <div className="alert alert-danger py-2 small mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Email / Username */}
          <div className="mb-3">

            <label className="login-label">
              Email or Username
            </label>

            <input
              type="text"
              className="login-input"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Password */}
          <div className="mb-3">

            <div className="login-password-header">

              <label className="login-label mb-0">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="login-forgot"
              >
                Forgot Password?
              </Link>

            </div>

            <input
              type="password"
              className="login-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* Remember Me */}
          <div className="login-remember mb-4">

            <input
              type="checkbox"
              id="remember"
              defaultChecked
            />

            <label htmlFor="remember">
              Remember me on this device
            </label>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn-primary-custom login-button"
          >
            Log In to BettingExpert
          </button>

        </form>

        {/* Register */}
        <div className="login-register">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Register Now
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;