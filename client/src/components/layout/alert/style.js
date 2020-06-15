import styled from 'styled-components';

export const AlertContainer = styled.div`
    text-align: center;
    margin-top: 10px;
    color: white;
    padding:20px;
    transition: 0.9s;
    background: ${props => props.type === 'danger' ? 'red' : 'green' }

`