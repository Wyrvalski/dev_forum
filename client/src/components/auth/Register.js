/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    name, email, password, password2,
  } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
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
        Create Your Account
      </p>
      <form
        action="dashboard.html"
        className="form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="form-group">
          <input
            name="name"
            onChange={(e) => onChange(e)}
            value={name}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            name="email"
            value={email}
            type="email"
            placeholder="Email Address"
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            name="password2"
            value={password2}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account?
        {' '}
        <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { setAlert, register })(Register);
