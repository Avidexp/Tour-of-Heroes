import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroesList from './containers/heroList';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import {createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Button, Card, CardTitle, Row, Input } from 'react-materialize';
import newHero from './containers/addHero';
import {addHero, selectHero, deleteHero, editHero, searchGitUser, assignGitUser, assignUser, searchUser} from './actions/actions';
import Search from './containers/githubSearch';
import history from './history';

import HeroesForm from './containers/hero';
import SearchForm from './containers/githubSearch';
import GithubUser from './containers/gituser';
const store = createStore(rootReducer, window.STATE_FROM_SERVER);



class Dashboard extends Component {
  submit = (values) => {
    
        console.log(values.gitUser);
    
          fetch(`https://api.github.com/users/${values.gitUser}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0
      `)
            .then(resp => resp.json())
            .then(user => {
              
              store.dispatch(searchUser(user))
              console.log(store.getState());
              history.push('/', store.getState());
              history.goBack();
              }
            )
            
            .catch(err => console.log(err));
        };
    
      render(){
        
         
    
          const confirmGitUser =() =>{
            var user = store.getState().heroes.searchCurrentUser.user;
            console.log("HIIIII");
            console.log(user);
            if (user){
              store.dispatch(assignUser(user));
              history.push('/', store.getState());
              history.goBack();
            } else {
              history.push('/', store.getState());
              history.goBack();
            }
            
          };
          return(
            <div> 
              <SearchForm onSubmit={this.submit}/>
              <button onClick={() =>confirmGitUser()}>This is me! </button>
              <br/>
              <br/>
             

              {store.getState().heroes.currentUser.user.login  ?  <div> <h2>Welcome , {store.getState().heroes.currentUser.user.login}</h2>
            <img className="github-usertag__avatar" src={`${store.getState().heroes.currentUser.user.avatar_url}`} alt="image not displayed" /> </div>: 
              
             
              <div>
                {store.getState().heroes.searchCurrentUser.user  ?  <div> <h2>{store.getState().heroes.searchCurrentUser.user.login}</h2>
            <img className="github-usertag__avatar" src={`${store.getState().heroes.searchCurrentUser.user.avatar_url}`} alt="image not displayed" /> </div>: 
            <h2> Search for github Account </h2> 
            }
            </div>
              };
              </div>
              
            );
            
          
        };
};


class App extends Component {
  render(){
    console.log(store.getState());
    const Click = (hero) =>  store.dispatch(selectHero(hero)); console.log(store.getState());
return(
  <div>
    <h1> Main Page </h1>
    <HeroesList 
            heroes={store.getState()}
              handleClick={Click}  /> 
              <br/>
              <button type="button" onClick={() => history.goBack()}>Go Back</button>
  </div>
);
};
}; 

class GitSearch extends React.Component{

  submit = (values) => {

    console.log(values.gitUser);

      fetch(`https://api.github.com/users/${values.gitUser}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0
  `)
        .then(resp => resp.json())
        .then(user => {
          console.log(user.avatar_url + " " + user.login);
          store.dispatch(searchGitUser(user))
          console.log(store.getState().heroes.searchUser);
          history.push('/searchDone', store.getState());
          history.goBack();
          }
        )
        
        .catch(err => console.log(err));
    };

  render(){
    
      var user = store.getState().heroes.searchUser.user;
      
      console.log(user);

      const confirmGitUser =() =>{
        
        store.dispatch(addHero(user));
        console.log(store.getState());
        history.push('/heroes', store.getState());
        history.push('/heroes', store.getState());
        history.goBack();
      }
      return(
        <div> 
          <SearchForm onSubmit={this.submit}/>
          <button type="button" onClick={() => confirmGitUser()}> Add Hero </button>
          <br/>
          <br/>
          <button type="button" onClick={() => history.goBack()}>Go Back</button>
          {store.getState().heroes.searchUser.user  ?  <div> <h2>{store.getState().heroes.searchUser.user.login}</h2>
        <img className="github-usertag__avatar" src={`${store.getState().heroes.searchUser.user.avatar_url}`} alt="image not displayed" /> </div>: 

          <h2>Please Search First </h2>
        }
          
        </div>
      );
    }

}
class changeHero extends React.Component {
 
  render(){
    let id = store.getState().heroes.selectedHero[0].id;
    let name = store.getState().heroes.selectedHero[0].name;
    let url = store.getState().heroes.selectedHero[0].avatar_url;
    let bio = store.getState().heroes.selectedHero[0].user.bio;
    console.log(id);
    
    return(
      <div>
      <h1> Hero: {name} </h1>
      <h3> ID: {id} </h3>
      <img src={url} alt="img not displayed" />
      <p>{bio} </p>
       
      <Button waves='red'><Link to={`/details/:${id}/update`}>Edit Hero</Link></Button>
      <br/>
      <button type="button" onClick={() => history.goBack()}>Go Back</button>
      </div> 
    );
  };
};
class AlterHero extends React.Component {
  submit = (values) => {
    console.log(values.heroName);
    let heroid = store.getState().heroes.selectedHero[0].id;
    let heroname = store.getState().heroes.selectedHero[0].name;
    store.dispatch(editHero(heroid, values.heroName));
    console.log(store.getState().heroes);
    history.push(`/heroes`, store.getState());
    history.push(`/heroes`, store.getState());
    history.goBack();
  }

  render(){
    let heroid = store.getState().heroes.selectedHero[0].id;
    let heroname = store.getState().heroes.selectedHero[0].name;
  return(

    <div> 
      <h1> Edit Hero: {heroname} </h1>
    <h3> ID: {heroid} </h3>
  <HeroesForm onSubmit={this.submit} heroVal={heroname} /> 
  </div>
);
  }
  };


class Routes extends React.Component { 
  render(){
    return(
<Router history={history}>
        <div className="nav">
            
                <Button waves='red'><Link to="/" >Home</Link></Button>
                <Button waves='red'><Link to="/heroes" >List of Heroes</Link></Button>
                <Button waves='red'><Link to="/newhero" >New Hero</Link></Button>
                
                
                <br/>
                <br/>
        <Route exact path='/' component={Dashboard} />
        <Route path='/heroes' component={App}/>
        <Route path='/newhero' component={GitSearch}/>
        <Route path='/searchDone' component={GitSearch}/>
        <Route path='/details/:heroid' component={changeHero}/>
        <Route path='/details/:heroid/update' component={AlterHero}/>
        </div>
    </Router>
    )
  };

};

ReactDOM.render(
  <Provider store={store}>
      <Routes /> 
  </Provider>, 
document.getElementById('root'));

export default store;