import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './style';

const Input = (props) => {
  const onChange = (e) => {
    props.onChangeInput(e);
  };

  return (
    <div>
      <InputStyle
        onChange={(e) => onChange(e)}
        name={ props.name }
        value={props.valueInput}
        type={ props.type }
        placeholder={ props.placeholder }
        minLength={ props.minLength ? props.minLength : 'unset' }
      ></InputStyle>
    </div>
  );
};

Input.propTypes = {
  onChangeInput: PropTypes.func.isRequired
};

export default Input;
