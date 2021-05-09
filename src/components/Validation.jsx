import React, { useReducer } from 'react'
import { reducer } from '../reducer/reducer'
import ValidateComponent from './ValidateComponent'

function Validation() {
    const [state, dispatch] = useReducer(reducer, {})
    return (
        <div>
            <ValidateComponent state={state} dispatch={dispatch}  label={1}>
                <ValidateComponent state={state} dispatch={dispatch} label={2}/>
                <ValidateComponent state={state} dispatch={dispatch} label={3}>
                    <ValidateComponent state={state} dispatch={dispatch} label={4}/>
                </ValidateComponent>
                <ValidateComponent state={state} dispatch={dispatch} label={5}/>
            </ValidateComponent>
        </div>
    )
}

export default Validation
