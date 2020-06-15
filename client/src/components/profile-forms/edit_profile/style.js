import styled from 'styled-components';

export const SelectStyle = styled.select`
  margin: 5px;
  height: 25px;
  width: 510px;
  @media (max-width: 600px) {
    width: 310px;
  }
`;

export const Form = styled.form`
  width: 550px;
  @media (max-width: 600px) {
    width: 350px;
  }

  button {
    border-radius: 5px;
    background: #819ff7;
    margin: 10px;
  }
`;

export const TextAreaStyle = styled.textarea`
  margin: 5px;
  height: 25px;
  width: 500px;
  @media (max-width: 600px) {
    width: 300px;
  }
`;
