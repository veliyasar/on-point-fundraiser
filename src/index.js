import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Home from './views/home'
import Register from './views/register'
import Search from './views/search'
import Campaign from './views/campaign'

const App = () => {
    return (
        <Router>
            <div>
                <Route component={Login} exact path="/login"/>
                <Route component={Home} exact path="/"/>
                <Route component={Register} exact path="/register"/>
                <Route component={Search} exact path="/search"/>
                <Route component={Campaign} exact path="/campaign"/>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))