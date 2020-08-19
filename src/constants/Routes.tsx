import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Landing from '../pages/Landing';
import { NotFound } from '../pages/NotFound';
import Register from '../pages/Register';

const Routes: React.FC = ()=>{
    const loggedIn:boolean = false;
    return(
        <main>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Landing/>: <Redirect to="/register"/>}
                </Route>
                <Route path="/register">
                    {!loggedIn ? <Register/>: <Redirect to="/"/>}
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
        </main>
    );
}

export default Routes;