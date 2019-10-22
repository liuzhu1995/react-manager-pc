import {CHANGE_LOGIN} from './actionTypes';


export const hasLogin = (data) => {
  return {
    type: CHANGE_LOGIN,
    status: data
  }
};


