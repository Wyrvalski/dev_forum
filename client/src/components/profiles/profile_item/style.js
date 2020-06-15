import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  text-shadow: 0.2em 0.2em 0.2em black;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 800px;
  background: #819ff7;
  border-radius: 15px;
  img {
    border-radius: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  ul {
    display: inline-block;
    margin: auto 0;
    margin-right: 30px;
    li {
      color: green;
      text-shadow: 0.1em 0.1em 0.1em white;
      padding: 5px;
    }
  }

  @media(max-width: 850px){
    img {
      width: 200px;
      margin: 0 auto;
      padding: 5px;
    }
    width: 300px;
    flex-direction:column;
    ul {
      padding:20px;
    }
  }
`;
