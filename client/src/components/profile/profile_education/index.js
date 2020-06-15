import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { ContainerEdu } from './style';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <ContainerEdu>
    <h3>{school}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='DD/MM/YYYY'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </ContainerEdu>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
