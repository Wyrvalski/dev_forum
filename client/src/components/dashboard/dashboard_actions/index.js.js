import React from 'react';
import { Link } from 'react-router-dom';
import { Acoes } from './style';
const DashboardActions = () => {
  return (
    <Acoes> 
      <Link to='/edit-profile'>Editar Perfil</Link>
      <Link to='/add-experience'>Adicionar Experiência</Link>
      <Link to='/add-education'>Adicionar Escolarização</Link>
    </Acoes>
  );
};

export default DashboardActions;
