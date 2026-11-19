import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!terms) {
      setError('You must accept the Terms and Conditions.');
      return;
    }

    register(username, email, password);
    navigate('/');
  };

  return (
    <div className="register-page">

      <div className="register-header">
        <PageHeader
          title="Create Account"
          subtitle="Join 100,000+ sports bettors and get 1,000 free bonus points"
        />
      </div>

      <div className="register-card be-card">

        {error && (
          <div className="alert alert-danger py-2 small mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="mb-3">
            <label className="register-label">
              Username
            </label>

            <input
              type="text"
              className="register-input"
              placeholder="Alex_Bettor"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="register-label">
              Email Address
            </label>

            <input
              type="email"
              className="register-input"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="register-label">
              Password
            </label>

            <input
              type="password"
              className="register-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="register-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="register-input"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Terms */}
          <div className="register-terms mb-4">

            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />

            <label htmlFor="terms">
              I agree to the Terms of Service and 18+ Responsible Gambling Policy.
            </label>

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn-primary-custom register-button"
          >
            Register Account
          </button>

        </form>

        {/* Login Link */}
        <div className="register-login">
          <span>Already have an account?</span>

          <Link to="/login">
            Log In
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Register;