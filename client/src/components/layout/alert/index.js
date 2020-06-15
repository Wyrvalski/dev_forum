/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AlertContainer } from './style'

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map((alert) => (
    <AlertContainer type={alert.alertType} key={alert.id}>
      {alert.msg}
    </AlertContainer>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
