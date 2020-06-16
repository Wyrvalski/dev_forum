/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import ContainerLoginCadastro from '../../layout/container_cadastro_login';
import Input from '../../layout/input';
import Button from '../../layout/input_button';
// import { Small } from './style';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <ContainerLoginCadastro>
      <h1>Cadastrar</h1>
      <p>
        <i /> Crie uma conta
      </p>
      <form action='/dashboard' onSubmit={(e) => onSubmit(e)}>
        <div>
          <Input
            name='name'
            onChangeInput={(e) => onChange(e)}
            value={name}
            type='text'
            placeholder='Nome'
          />
        </div>
        <div>
          <Input
            onChangeInput={(e) => onChange(e)}
            name='email'
            value={email}
            type='email'
            placeholder='Email'
          />
          <small>
            Este site usa Gravatar, portanto, se você quiser uma imagem de
            perfil, use um Email Gravatar
          </small>
        </div>
        <div>
          <Input
            onChangeInput={(e) => onChange(e)}
            name='password'
            value={password}
            type='password'
            placeholder='Senha'
          />
        </div>
        <div>
          <Input
            onChangeInput={(e) => onChange(e)}
            name='password2'
            value={password2}
            type='password'
            placeholder='Confirmar Senha'
          />
        </div>
        <Button value='Registrar' />
      </form>
      <p>
        Já tem uma conta? <Link to='/login'>Logar</Link>
      </p>
    </ContainerLoginCadastro>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { setAlert, register })(Register);
