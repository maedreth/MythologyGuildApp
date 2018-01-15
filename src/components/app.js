import React, { Component } from 'react';
import ToonList from '../containers/toon_list';
import RefreshButton from '../components/refresh_button';

export default class App extends Component {
  render() {
    return (
      <div>  
        <RefreshButton />
        <ToonList />
      </div>
    );
  }
}
