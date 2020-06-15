import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';
import { connect } from 'react-redux';
import { getPosts } from '../../../actions/post';
import PostItem from '../post_item';
import PostForm from '../post_form';
import { Container } from './style';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      {/* <Link to='/posts'></Link> */}
      <PostForm />
      <div>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
