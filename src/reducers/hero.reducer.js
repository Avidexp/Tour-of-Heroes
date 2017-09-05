import * as Actions from '../actions/types';

const initialHeroes = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];
const initialState =
    {
        heroes:[{id:0,name:"", avatar_url:'',user:{}}],
        selectedHero:[{id:0, name:""}],
        searchUser:[{user:{}}],
        gitUser:[{user:{}}],
        currentUser: {user:{}},
        searchCurrentUser: [{user:{}}]

    };

export default function heroes(state = initialState, action){
    switch(action.type){
        case Actions.NEW_HERO:
            return Object.assign({}, state, {
                heroes: [...state.heroes, {name: action.user.login ,avatar_url: action.user.avatar_url, user: action.user, id: state.heroes.reduce((maxId, hero) => Math.max(hero.id, maxId), -1) + 1 }]
            });
        
        case Actions.EDIT_HERO:
            return Object.assign({},state,{ 
                
                heroes: state.heroes.map(
                hero => hero.id === action.id ? {...hero, id:hero.id,  name: action.text}: hero
            )})

        case Actions.DELETE_HERO:
            return state.filter(hero => hero.id !== action.id);
        case Actions.HERO_SELECTED:

        //console.log(action.hero);
        return  Object.assign({}, state, {
            ...state,
            selectedHero: state.heroes.filter(hero => hero.id === action.hero.id)
        },); 
            
        case Actions.GIT_SEARCH:
            return Object.assign({}, state, {
                ...state,
                searchUser: {user: action.user}
            },); 

            case Actions.ASIGN_GIT:
            return Object.assign({}, state, {
                ...state,
                currentUser: {user: action.user}
            },); 
            case Actions.USER_SEARCH:
            return Object.assign({}, state, {
                ...state,
                searchCurrentUser: {user: action.user}
            },); 
            case Actions.ASSIGN_USER:
            return Object.assign({}, state, {
                ...state,
                currentUser: {user: action.user}
            },); 
        
    default:
        return state;
    }
}
