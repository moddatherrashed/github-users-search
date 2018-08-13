import React, { Component } from 'react';
import { WebView } from 'react-native';

class AccountViewer extends Component {

    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#4078c0',
        },
    }
    render() {
        const { params } = this.props.navigation.state
        return (
            <WebView
                source={{ uri: params.url }}
            />
        );
    }
}

export { AccountViewer }