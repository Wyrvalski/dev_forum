import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos } from '../../../actions/profile';
import { ContainerGit, Repos, Repo } from './style'

const ProfileGithub = ({ username, getRepos, repos }) => {
  useEffect(() => {
    getRepos(username);
  }, [getRepos, username]);

  return (
    <ContainerGit>
      <h2>Github Repos</h2>
      <Repos>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <div>
            <h4>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li>
                Stars: {repo.stargazers_count}
              </li>
              <li>
                Watchers: {repo.watchers_count}
              </li>
              <li>Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </Repo>
      ))}
      </Repos>
    </ContainerGit>
  );
};

ProfileGithub.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getRepos })(ProfileGithub);
