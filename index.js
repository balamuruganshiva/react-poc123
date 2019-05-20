import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Summary from './Summary';
import Checkout from './Checkout';
import HeaderSearch from './HeaderSearch';
import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
const store = createStore(rootReducer,applyMiddleware(thunk));
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Route path="/" component={HeaderSearch} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/moviedetails" component={MovieDetails} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/checkout" component={Checkout} />
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
