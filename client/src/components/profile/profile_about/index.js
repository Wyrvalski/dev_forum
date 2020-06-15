import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <Container>
    {bio && (
      <Fragment>
        <h2>Biografia {name.trim().split(' ')[0]}</h2>
        <p>{bio}</p>
        <div/>
      </Fragment>
    )}
    <h2>Skill Set</h2>
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          {skill}
        </div>
      ))}
    </div>
  </Container>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
