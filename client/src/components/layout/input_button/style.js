import styled from 'styled-components';

export const Button = styled.input`
  color: white;
  background: #819ff7;
  border-radius: 10px;
  margin: 3px auto;
  width: ${props => props.width};
  height: 30px;
  :hover {
    cursor: pointer;
  }
`;

Button.defaultProps = {
  width: '200px'
}
