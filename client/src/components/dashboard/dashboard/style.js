import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #819ff7;
    text-shadow: 0.1em 0.1em 0.1em black;
  }

  p {
    color: #819ff7;
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
  }

`;
