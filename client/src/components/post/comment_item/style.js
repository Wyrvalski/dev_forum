import styled from 'styled-components';

export const ContainerPosts = styled.div`
  width: 750px;
  padding: 20px;
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  margin: 5px;
  img {
    border-radius: 50%;
  }

  @media (max-width: 800px) {
    width: 350px;
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
  button {
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    background: red;
  }
  @media (max-width: 800px) {
    width: 350px;
  }
`;
