import styled from 'styled-components';
import image from './fundo.jpg';

export const SecLanding = styled.section`
  @media (min-width: 0px) {
    background: url(${image}) no-repeat;
    height: 100vh;
    background-size: cover;
    text-shadow: 0.1em 0.1em 0.1em black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 360px;
  }
`;

export const ContainerLanding = styled.div`
  @media (min-width: 0px) {
    background-color: rgb(129, 159, 247, 25%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;
    justify-content: space-between;
    height: 400px;

    h1 {
      text-shadow: 0.1em 0.1em 0.1em black;
    }

    p {
      padding: 20px;
    }
    div {
      padding: 10px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      a {
      }
    }
  }
`;

export const Button = styled.button`
  margin-bottom: 20px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: ${(props) => props.color};
  a{
    width: 250px;
  }
`;
