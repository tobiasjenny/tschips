import React from "react"
import {Route, Switch} from 'react-router-dom'
import Fragen from "../components/fragen/Fragen"
import Home from "../components/Home/Home"
import Personalisieren from "../components/personalisieren/Personalisieren"
import StartPersonalisierung from "../components/personalisierung-start/Personalisierung-start"

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/personalisieren'
                component={Personalisieren}
            />
            <Route
                path='/personalisieren-start'
                component={StartPersonalisierung}
            />
            <Route
                path='/fragen'
                component={Fragen}
            />
            <Route
                path='/'
                exa
                component={Home}
            />
            
        </Switch>
    )
}

export default Routes