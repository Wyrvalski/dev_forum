import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './style';
import { FcOk } from 'react-icons/fc';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <Container>
      <img src={avatar} alt=''/>
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`}>
          Ver perfil
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>
            <FcOk /> {skill}
          </li>
        ))}
      </ul>
    </Container>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
