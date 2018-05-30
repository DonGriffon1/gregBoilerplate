import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import Home from './containers/Home';
import Splash from './containers/Splash';


class IndexRoute extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene hideNavBar key="splash" component={Splash} />
                    <Scene hideNavBar key="home" type='replace' component={Home} />
                </Scene>
            </Router>
        )
    }
}

export default IndexRoute
