import React,{ Fragment } from 'react';
import { Container } from './style';

const ContainerLoginCadastro = (props) => {
  return (
    <Container>
      <Fragment>{props.children}</Fragment>
    </Container>
  );
};

ContainerLoginCadastro.propTypes = {};

export default ContainerLoginCadastro;
