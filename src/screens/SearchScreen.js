import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
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
                <View style={styles.screenContent}>
                    <Image
                        source={{ uri: 'https://spemer.com/img/works/jekyll/github.png' }}
                        style={styles.githubImage}
                        resizeMode='contain'
                    />
                    <Text style={styles.githubUsersSearchText}>GitHub Users Search</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContent: {
        flex: 1
    },
    githubImage: {
        height: 80
    },
    githubUsersSearchText: {
        fontSize: 24,
        color: '#4078c0',
        fontWeight: '700',
        margin: 15,
        alignSelf: 'center'
    }
})

export { SearchScreen }