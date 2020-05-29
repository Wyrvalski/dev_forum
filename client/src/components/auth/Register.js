import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
      e.preventDefault();
      if (password !== password2) {
        console.log('Password incorret');
      } else {
          console.log(formData);
          
      }
  }
  
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form action='dashboard.html' className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            name='name'
            onChange={(e) => onChange(e)}
            value={name}
            type='text'
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={(e) => onChange(e)}
            name='email'
            value={email}
            type='email'
            placeholder='Email Address'
          />
          <small className='form-text'>
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            onChange={(e) => onChange(e)}
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            minlength='6'
          />
        </div>
        <div className='form-group'>
          <input
            onChange={(e) => onChange(e)}
            name='password2'
            value={password2}
            type='password'
            placeholder='Confirm Password'
            minlength='6'
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
