//React
import React from 'react';

//Router
import {Switch, Route} from 'react-router-dom';

//Componenets
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
)