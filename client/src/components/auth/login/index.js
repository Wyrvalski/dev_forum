/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import ContainerLoginCadastro from '../../layout/container_cadastro_login';
import Input from '../../layout/input';
import Button from '../../layout/input_button';


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <ContainerLoginCadastro>
      <h1>Login</h1>
      <p>
        <i /> Entrar na conta
      </p>
      <form action='/dashboard' onSubmit={(e) => onSubmit(e)}>
        <div>
          <Input
            type='email'
            name='email'
            onChangeInput={(e) => onChange(e)}
            valueInput={email}
            placeholder='Email'
          />
        </div>
        <div>
          <Input
            onChangeInput={(e) => onChange(e)}
            name='password'
            value={password}
            type='password'
            placeholder='Senha'
            minLength='6'
          />
        </div>
        <Button value='Login' />
      </form>
      <p>
        Não tem uma conta?
        <Link to='/register'>Cadastre-se</Link>
      </p>
    </ContainerLoginCadastro>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { login })(Login);
