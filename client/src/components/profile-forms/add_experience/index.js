import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../actions/profile';
import { Container, InputData } from './style';
import Input from '../../layout/input';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Adicionar experiência</h1>
      <small>* Campos Obrigatórios</small>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div>
          <Input
            type='text'
            placeholder='* Cargo'
            name='title'
            valueInput={title}
            onChangeInput={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <Input
            type='text'
            placeholder='* Empresa'
            name='company'
            valueInput={company}
            onChangeInput={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <Input
            type='text'
            placeholder='Localização'
            name='location'
            valueInput={location}
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
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Emprego atual
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
            placeholder='Descrição do cargo'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);
