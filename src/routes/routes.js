import React from 'react';
import SearchTextPageContainer from '../containers/SearchTextPageContainer';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (	
  <Switch>
    <Route exact path="/" component={SearchTextPageContainer} />
  </Switch> 
);

export default Routes;
