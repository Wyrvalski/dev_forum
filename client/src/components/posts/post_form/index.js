import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/post';
import { ContainerPostForm } from './style';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <ContainerPostForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          cols='30'
          rows='5'
          placeholder='Crie o post aqui...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type='submit' value='Enviar' />
      </form>
    </ContainerPostForm>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
