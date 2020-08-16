import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import { NotFound } from './components/NotFound';

const Routes: React.FC = ()=>{
    const loggedIn:boolean = false;
    return(
        <main>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Landing/>: <NotFound/>}
                </Route>
            </Switch>
        </BrowserRouter>
        </main>
    );
}

export default Routes;