import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../actions/post';
import { ContainerPostForm } from './style'

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <ContainerPostForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          cols='30'
          rows='5'
          placeholder='Deixe seu comentário...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type='submit' value='Enviar'/>
      </form>
    </ContainerPostForm>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
