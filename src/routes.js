import React from 'react';

//Router-DOM
import {Switch, Route} from 'react-router-dom';

//Components
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
)