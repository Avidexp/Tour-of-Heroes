import { bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import React from 'react';
import {selectHero} from '../actions/actions';
import {changeHero} from './hero';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import store from '../index';
import {Button, Card, CardTitle, Row, Input } from 'react-materialize';

class HeroesList extends React.Component {
    render(){
        console.log(this.props.heroes.heroes.heroes);
    return(
        <ul className ="heroes">
            {this.props.heroes.heroes.heroes.map(hero => (
                <div>
                {hero.name.length > 2 ? <Link to={`/details/:${hero.id}`}>
                <Button waves='light'onClick={() => this.props.handleClick(hero) }>{hero.name}, {hero.id}
                </Button>
                </Link> : <div></div>}
                </div>
                
            ))}
            </ul>
    
    );
};
};

export default HeroesList;
