/* eslint-disable no-shadow */
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import DashboardActions from '../dashboard_actions/index.js';
import Experience from '../experience';
import Education from '../education';
import { deleteAccount } from '../../../actions/profile';
import { Container } from './style';
import Spinner from '../../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <h1>Perfil</h1>
      <p>Bem vindo {user && user.name}</p>
      {profile != null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div>
            <button onClick={() => deleteAccount()}>Deletar Conta</button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>Perfil ainda não foi criado</p>
          <Link to='/create-profile'>Criar Perfil</Link>
        </Fragment>
      )}
    </Container>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
