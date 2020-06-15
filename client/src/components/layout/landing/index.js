import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SecLanding, ContainerLanding, Button } from './style';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <SecLanding>
      <ContainerLanding primary={'gray'}>
        <h1>Forum Desenvolvedores</h1>
        <p>
          Crie um perfil e e divida com outros desenvolvedores o seu
          conhecimento e peça ajuda quando precidar.
        </p>
        <div>
          <Button color={'green'}>
            <Link to='/register'>Sign Up</Link>
          </Button>
          <Button color={' rgb(129, 159, 247)'}>
            <Link to='/login'>
              Login
            </Link>
          </Button>
        </div>
      </ContainerLanding>
    </SecLanding>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
