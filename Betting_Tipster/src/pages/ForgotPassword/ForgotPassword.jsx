import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="forgot-password-page">

      {/* ================================
          PAGE HEADER
      ================================= */}
      <div className="forgot-password-header">
        <PageHeader
          title="Reset Password"
          subtitle="Enter your account email to receive a password recovery link"
        />
      </div>

      {/* ================================
          FORGOT PASSWORD CARD
      ================================= */}
      <div className="forgot-password-card be-card">

        {submitted ? (

          /* ================================
             SUCCESS MESSAGE
          ================================= */
          <div className="forgot-success">

            <div className="forgot-success-icon-wrapper">
              <i className="fa-solid fa-paper-plane"></i>
            </div>

            <h5>
              Check Your Inbox
            </h5>

            <p>
              We've sent a password reset link to{' '}
              <strong>{email}</strong>.
            </p>

            <Link
              to="/login"
              className="btn-primary-custom forgot-back-button"
            >
              Back to Login
            </Link>

          </div>

        ) : (

          /* ================================
             RESET FORM
          ================================= */
          <form onSubmit={handleSubmit}>

            <div className="forgot-form-group">

              <label
                htmlFor="forgot-email"
                className="forgot-label"
              >
                Account Email
              </label>

              <input
                id="forgot-email"
                type="email"
                className="forgot-input"
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="btn-primary-custom forgot-submit-button"
            >
              Send Reset Link
            </button>

          </form>

        )}

        {/* ================================
            LOGIN / REGISTER LINKS
        ================================= */}
        <div className="forgot-auth-links">

          <span>
            Remember your password?
          </span>

          <Link to="/login">
            Login
          </Link>

          <span className="forgot-divider">
            |
          </span>

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;