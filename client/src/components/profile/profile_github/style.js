import styled from 'styled-components';

export const ContainerGit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  width: 95%;
  float: left;
  background: white;
  border-radius: 15px;
  h2 {
    margin: 7px;
  }
`;

export const Repos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;

export const Repo = styled.div`
  margin: 15px;
  width: 200px;
  h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      padding: 2px;
    }
  }
`;
