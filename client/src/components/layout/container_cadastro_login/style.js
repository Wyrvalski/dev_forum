import styled from 'styled-components';

export const Container = styled.div`
  color: #819ff7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 150px;

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    form {
      width: 300px;
      small {
        margin: 5px;
      }
    }
  }

  @media (max-width: 400px) {
    margin-top: 120px;
  }
`;
