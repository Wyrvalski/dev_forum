/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Sign into Your Account
      </p>
      <form
        action="dashboard.html"
        className="form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            name="email"
            value={email}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            minLength="6"
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account?
        <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { login })(Login);
