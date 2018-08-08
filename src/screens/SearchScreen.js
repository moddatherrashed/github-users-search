import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from '../components'

class SearchScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <SearchBar
                    onChangeText={this.handleInputChange}
                    value={this.state.query}
                />
            </View>
        );
    }
}

export { SearchScreen }