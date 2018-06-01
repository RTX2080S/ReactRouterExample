import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /page1 or /page2. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/page1' component={Page1} />
                    <Route path='/page2' component={Page2} />
                </Switch>
            </main>
        );
    }
}

export default Main;
