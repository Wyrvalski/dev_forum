import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../../actions/profile';
import { Table, Container } from './style';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)}>
          Deletar
        </button>
      </td>
    </tr>
  ));
  return (
    <Container>
      <h2>Formação</h2>
      <Table>
        <thead>
          <tr>
            <th>Escola</th>
            <th>Nivel</th>
            <th>Periodo</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </Table>
    </Container>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
