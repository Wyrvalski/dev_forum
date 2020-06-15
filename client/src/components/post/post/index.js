import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getPost } from '../../../actions/post';
import PostItem from '../../posts/post_item';
import CommentForm from '../comment_form';
import CommentItem from '../comment_item'
import { Link } from 'react-router-dom';
import { Container } from './style'

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Container>
      <Link to='/posts'>Voltar para posts</Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Container>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
