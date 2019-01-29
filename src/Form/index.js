import React from 'react';
import  './Form.css';

const Form =(props)=> {
    return(
        <form className="form-wrapper" onSubmit={props.getRecipe}>
            <input className="form-wrapper-input" type="text" name="recipeName"/>
            <button  className="form-wrapper-btn"> Search </button>
        </form>
    )
}

export default Form;