import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import Router from './router';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Router/>
        </div>
      </HashRouter>
    </Provider>
  );
}


export default App;
