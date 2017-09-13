import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Wrapper from '../components/Wrapper/Wrapper'
import StartPage from '../components/Auth/StartPage'
import SignUp from '../components/Auth/SignUp'

export default class Routes extends React.Component {
    render() {
        const Status = ({ code, children }) => (
            <Route render={({ staticContext }) => {
                if (staticContext)
                    staticContext.status = code;
                return children
            }}/>
        );

        const NotFound = () => (
            <Status code={404}>
                <div>
                    <h1>Sorry, can’t find that.</h1>
                </div>
            </Status>
        );

        return(
            <Switch>
                <Route exact path='/' render={() => <Redirect to='profile'/>}/>
                <Route exact path='/(profile|messages)/' component={Wrapper}/>
                <Route exact path='/start' component={StartPage}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}