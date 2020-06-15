import React from 'react';
import PropTypes from 'prop-types';
import { ContainerTop } from './style';
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillChrome,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram
} from 'react-icons/ai';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <ContainerTop>
      <img src={avatar} alt='' />
      <h1>{name}</h1>
      <p>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <AiFillChrome title='Site' size={30} />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <AiFillTwitterCircle title='Twitter' size={30}  />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <AiFillFacebook title='Facebook' size={30} />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin title='Linkedin' size={30} />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube title='Youtube' size={30} />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram title='Instagram' size={30} />
          </a>
        )}
      </div>
    </ContainerTop>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
