import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import ProfileExperience from '../profile_experience';
import ProfileEducation from '../profile_education';
import { getProfileById } from '../../../actions/profile';
import ProfileTop from '../profile_top';
import ProfileAbout from '../profile_about';
import ProfileGithub from '../profile_github';
import { Container, ProfileView } from './style';
import {
  ProfileViewBody,
  ProfileExperienceView,
  ProfileEucationView
} from './style';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Container>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile'>Editar Profile</Link>
            )}
          <ProfileView>
            <ProfileTop profile={profile} />
            <ProfileViewBody>
              <ProfileAbout profile={profile} />
              <ProfileExperienceView>
                <h2>Experience</h2>
                {profile.experience.length > 0 ? (
                  <Fragment>
                    {profile.experience.map((experience) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No experience credentials</h4>
                )}
              </ProfileExperienceView>
              <ProfileEucationView>
                <h2>Education</h2>
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No education credentials</h4>
                )}
              </ProfileEucationView>

              {profile.githubusername && (
                <ProfileGithub username={profile.githubusername} />
              )}
            </ProfileViewBody>
          </ProfileView>
        </Container>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
