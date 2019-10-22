import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as LoginReducer} from './pages/login';


const reducers = combineReducers({
  login: LoginReducer
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
