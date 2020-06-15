import React from 'react'
import {Container} from './style'

const ContainerForm = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default ContainerForm
