import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px;
  color: #819ff7;
  td,
  th {
    border: 1px solid;
    padding: 15px;
    border-color: black;
  }
  th {
    background: #dcdcdc;
  }
  td {
    text-align: center;
    button {
      background:red;
      border-radius: 5px;
    }
  }

  width: 500px;
`;

export const Container = styled.div`
  h2 {
    font-size: 20px;
    color: #819ff7;
    text-align: center;
  }
`;