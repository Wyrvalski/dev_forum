import styled from 'styled-components';

export const Nav = styled.nav`
  @media (min-width: 0px) {
    a {
      color: white;
      text-shadow: 0.1em 0.1em 0.1em black;
    }

    li {
      transition: transform 0, 3s;
    }

    .menu-ativo ul {
      left: 0;
    }

    .menu-ativo:after {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.4);
    }

    li:hover {
      transform: scale(1.2);
    }

    display: flex;
    align-items: center;
    background-color: #819ff7;
    min-height: 70px;
    box-shadow: black 3px 3px 3px;
    min-width: 360px;

    h1 {
      margin: 0 auto;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: unset;
      margin-left: 20px;
    }
  }
`;

export const MenuOpen = styled.div`
  @media (min-width: 0px) {
    margin-left: 15px;
    :hover {
      border: 1px solid;
      border-radius: 2px;
      width: 25px;
      cursor: pointer;
    }
    
    span {
      display: block;
      height: 3px;
      width: 25px;
      margin: 4px 0;
      border-radius: 4px;
      background: black;
    }
  }

  @media (min-width: 800px) {
  }

  @media not all and (max-width: 799px) {
    display: none;
  }
`;

export const MenuClose = styled.div`
  @media (min-width: 0px) {
    :hover {
      border: 1px solid;
      border-radius: 2px;
      width: 25px;
      cursor: pointer;
    }
    span {
      display: block;
      height: 3px;
      width: 25px;
      margin: 4px 0;
      border-radius: 4px;
      background: black;
    }
  }

  @media (min-width: 800px) {
  }
  @media not all and (max-width: 799px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  @media (min-width: 0px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    li {
      padding: 1em 0;
    }
  }

  @media (min-width: 800px) {
  }
`;

export const NavBar = styled.ul`
  @media (min-width: 0px) {
    margin-right: 0px;
    background-color: #819ff7;
    padding: 1em;
    margin: 0;
    height: 100%;
    width: 90%;
    max-width: 320px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -100%;
    transition: left 0.3s ease-out;
  }

  @media (min-width: 800px) {
    background-color: #819ff7;
    width: unset;
    position: unset;
    margin-right: 0px;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      li {
        margin-right: 20px;
      }
    }
  }
`;
