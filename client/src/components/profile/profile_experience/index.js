import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { ContainerExp } from './style';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <ContainerExp>
    <h3>{company}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='DD/MM/YYYY'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </ContainerExp>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
