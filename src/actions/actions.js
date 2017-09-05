import * as types from './types';


export const addHero = (user) => ({type: types.NEW_HERO,user});
export const editHero = (id, text) => ({type: types.EDIT_HERO, id, text});
export const deleteHero = id => ({type: types.DELETE_HERO, id});
export const selectHero = (hero) =>({type: types.HERO_SELECTED,hero});
export const searchGitUser = (user) =>({type: types.GIT_SEARCH,user});
export const assignGitUser = (username, url) =>({type: types.ASIGN_GIT,username, url});
export const assignUser = (user) => ({ type: types.ASSIGN_USER, user});
export const searchUser = (user) => ({ type: types.USER_SEARCH, user});