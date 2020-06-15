import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../../actions/profile';
import { Container, InputData } from './style';
import Input from '../../layout/input';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Adicione a formação</h1>
      <small>* Campos Obrigatórios</small>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div>
          <Input
            type='text'
            placeholder='* Escola ou Universidade'
            name='school'
            valueInput={school}
            onChangeInput={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <Input
            type='text'
            placeholder='* Nível'
            name='degree'
            valueInput={degree}
            onChangeInput={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <Input
            type='text'
            placeholder='Campo de estudo'
            name='fieldofstudy'
            valueInput={fieldofstudy}
            onChangeInput={(e) => onChange(e)}
          />
        </div>
        <div>
          <h4>Data de início</h4>
          <InputData type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() =>
                setFormData({ ...formData, current: !formData.current })
              }
            />{' '}
            Curso Atual
          </p>
        </div>
        <div>
          <h4>Data do último dia</h4>
          <InputData
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Descrição'
            value={description}
            onChange={onChange}
          />
        </div>
        <button type='submit'> Enviar </button>
        <Link to='/dashboard'>Voltar</Link>
      </form>
    </Container>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
