import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchTextPageContainer from '../src/containers/SearchTextPageContainer'
import './styles/style.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <SearchTextPageContainer />
        </Provider>
      </div>
    );
  }
}
