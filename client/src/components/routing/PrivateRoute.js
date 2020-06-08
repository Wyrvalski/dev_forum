/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (!isAuthenticated && !loading ? (
      <Redirect to="/login" />
    ) : (
      <Component {...props} />
    ))}
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
