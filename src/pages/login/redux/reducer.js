import {CHANGE_LOGIN} from './actionTypes';

const initialState = {
  login: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN: {
      return {login: true}
    }
    default: {
      return state
    }
  }
}
