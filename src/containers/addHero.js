import {connect} from 'react-redux';
import React from 'react';
import {addHero} from '../actions/actions';
import history from '../history';

let newHero = ({dispatch}) => {
    let input 
    return(
        <div>
            <h2>Create a new git hero! </h2>
            <br/>
            <br/>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addHero(input.value))
                input.value = ''
                }} >
                Name: 
            <input ref={node => {
                input = node
            }} />
            <br/>
            <br/>
            <button type="submit">
                Add Hero 
                </button>
                <br/>
                <button type="button" onClick={() => history.goBack()}>Go Back</button>
            </form>
        </div>
    )
}

newHero = connect()(newHero)

export default newHero;