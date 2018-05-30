
import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {styles} from "./styles";
import {
    Animated,
    Text
} from 'react-native';


export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            opacity: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
        setTimeout(() => Actions.home(), 2000)
    }

    render() {
        return (
            <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
                <Text style={styles.text}>Greg Boilerplate</Text>
            </Animated.View>
        );
    }
}

