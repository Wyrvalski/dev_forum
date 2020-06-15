import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../../actions/post';
import Spinner from '../../layout/Spinner';
import { ContainerPosts, Posts, Actions } from './style';
import { AiFillLike, AiFillDislike, AiFillDelete } from 'react-icons/ai';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date, loading },
  showActions
}) => (
  <Fragment>
    {loading ? (
      <Spinner />
    ) : (
      <ContainerPosts>
        <div>
          <Link to={`/profile/${user}`}>
            <img src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <Posts>
          <p>{text}</p>
          <p>
            Postado em <Moment format='DD/MM/YYYY'>{date}</Moment>
          </p>

          {showActions && (
            <Actions>
              <button onClick={() => addLike(_id)} type='button'>
                <AiFillLike color='white'/>
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>
              <button onClick={() => removeLike(_id)} type='button'>
                <AiFillDislike color='white'/>
              </button>
              <Link to={`/posts/${_id}`}>
                Respostas{' '}
                {comments.length > 0 && <span>{comments.length}</span>}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button onClick={() => deletePost(_id)} type='button'>
                  <AiFillDelete />
                </button>
              )}
            </Actions>
          )}
        </Posts>
      </ContainerPosts>
    )}
  </Fragment>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
