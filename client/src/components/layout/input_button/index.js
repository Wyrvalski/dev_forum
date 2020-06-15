import React, { Fragment } from 'react'
import {Button} from './style'

const InputButton = props => {
    return (
        <Fragment>
            <Button type='submit' value={ props.value }></Button>
        </Fragment>
    )
}

export default InputButton;