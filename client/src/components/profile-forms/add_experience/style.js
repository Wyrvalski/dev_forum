import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #819ff7;
  h1 {
    color: #819ff7;
    text-shadow: 0.1em 0.1em 0.1em black;
  }
  small {
    padding: 10px;
  }

  h4 {
    padding: 5px;
  }

  button {
    margin: 5px;
    background: #819ff7;
    color: white;
    border-radius: 5px;
  }

  button:hover {
      cursor: pointer;
  }
`;

export const InputData = styled.input`
  width: 300px;
  margin: 10px;
`;
