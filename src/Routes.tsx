import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';

const Routes: React.FC = ()=>{
    return(
        <main>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" name="Landing" component={Landing}/>
            </Switch>
        </BrowserRouter>
        </main>
    );
}

export default Routes;