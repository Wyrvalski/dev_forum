import styled from 'styled-components';

export const ContainerPostForm = styled.div`
  width: 750px;
  padding: 15px;
  form textarea {
    width: 740px;
  }

  form input {
    color: white;
    float: right;
    margin: 15px;
    background: #819ff7;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    width: 350px;
    form textarea {
      width: 340px;
    }
  }
`;