import React from "react";
import { Field, reduxForm } from 'redux-form';
import {Button, Icon } from 'react-materialize';

const apiURL = "https://api.github.com/users/";

class SearchForm extends React.Component{
    constructor(props){
    super(props);
    };
    render(){
        console.log(this.props);
    const {handleSubmit} = this.props;

    return(
    <div>
    <form onSubmit={handleSubmit}>
        <h4> Search for Github User </h4>
        <Field name="gitUser" component="input" type="text" /> 
        <Button waves='light' type="submit" name="action">Submit<Icon left>send</Icon></Button>
    </form>
    </div>
    )
  };};
  
  
  SearchForm = reduxForm({
    form: 'GithubSearch'
  })(SearchForm);
  export default SearchForm;