
import React from 'react';

import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';

class HeroesForm extends React.Component{
    constructor(props){
    super(props);
    };
    render(){
        console.log(this.props);
    const {handleSubmit} = this.props;

    return(
    <div>
    <form onSubmit={handleSubmit}>
        <h4> Updated Hero Name: </h4>
        <Field name="heroName" component="input" type="text" placeholder={this.props.heroVal} /> 
        <Button waves='light' type="submit" name="action">Submit<Icon left>send</Icon></Button>
    </form>
    </div>
    )
  };};
  
  
  HeroesForm = reduxForm({
    form: 'heroForm'
  })(HeroesForm);
  export default HeroesForm;


