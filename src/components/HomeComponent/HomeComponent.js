import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableHighlight
} from 'react-native';
import {styles} from "./styles";

class HomeComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.props.testUser("Max")}>
                    <Text style={styles.welcome}>
                        Welcome to React Native! !!!
                    </Text>
                </TouchableHighlight>
                <Button
                    onPress={() => this.props.consoleSaga()}
                    title="Saga action"
                    color='red'
                />
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {this.props.state.user}
                </Text>
            </View>
        );
    }
}

export default HomeComponent
