import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../../actions/post';
import { ContainerPosts, Posts } from './style';
import { AiFillDelete } from 'react-icons/ai';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
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
      {!auth.loading && user === auth.user._id && (
        <button onClick={() => deleteComment(postId, _id)} type='button'>
          <AiFillDelete />
        </button>
      )}
    </Posts>
  </ContainerPosts>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
