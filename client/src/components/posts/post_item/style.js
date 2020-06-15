import styled from 'styled-components';

export const ContainerPosts = styled.div`
  width: 750px;
  padding: 20px;
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  margin: 5px;
  img {
    border-radius:50%;
  }
  button {
    cursor: pointer;
  }
  a h4 {
    margin: 5px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width:350px;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
    }
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  @media (max-width: 800px) {
    width:350px;

  }
`;

export const Actions = styled.div`
  display: flex;
  button,
  a {
    width: 80px;
    margin: 5px;
  }

  button {
    border-radius: 5px;
    background: #819ff7;
  }

  button:last-child {
    background: red;
  }
`;
