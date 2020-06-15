/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import './css/style.css';
import { Nav, MenuOpen, MenuClose, Ul, NavBar } from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [formState, setState] = useState({
    menuAtivo: false
  });

  const { menuAtivo } = formState;

  const ativarMenu = () => setState({ menuAtivo: menuAtivo ? false : true });

  document.documentElement.onclick = function (event) {
    if (menuAtivo) {
      ativarMenu();
    }
  };
  const authLinks = (
    <Ul>
      <li>
        <Link to='/profiles'>Desenvolvedores</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <span>Painel</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </Ul>
  );

  const guestLinks = (
    <Ul>
      <li>
        <Link to='/profiles'>Desenvolvedores</Link>
      </li>
      <li>
        <Link to='/register'>Registrar-se</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Ul>
  );
  return (
    <Nav>
      <MenuOpen onClick={ativarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuOpen>
      <h1>
        <Link to='/'>Forum desenvolvedores</Link>
      </h1>
      <div className={menuAtivo ? 'menu-ativo' : ''}>
        <NavBar>
          <MenuClose>
            <span></span>
            <span></span>
            <span></span>
          </MenuClose>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </NavBar>
      </div>
    </Nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
