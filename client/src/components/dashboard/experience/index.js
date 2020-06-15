import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../../actions/profile';
import { Table, Container } from './style';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteExperience(exp._id)}>Deletar</button>
      </td>
    </tr>
  ));
  return (
    <Container>
      <h2>Experiência</h2>
      <Table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Cargo</th>
            <th>Periodo</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </Table>
    </Container>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
