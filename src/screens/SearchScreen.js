import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { SearchBar, ResultsList } from '../components'
import axios from 'axios'
class SearchScreen extends Component {
    state = {
        searchText: '',
        results: []
    }

    render() {
        return (
            <View>
                <SearchBar
                    onChangeText={this.handleInputChange}
                    value={this.state.searchText}
                    onSubmit={() => this.setState({ searchText: '' })}
                />
                <View
                    style={styles.screenContent}>
                    <Image
                        source={{ uri: 'https://spemer.com/img/works/jekyll/github.png' }}
                        style={styles.githubImage}
                        resizeMode='contain'
                    />
                    <Text
                        style={styles.githubUsersSearchText}>
                        GitHub Users Search
                    </Text>
                </View>
                {this.renderResultsList(this.state.searchText)}
            </View>
        )
    }

    getInfo = () => {
        axios.get(`https://api.github.com/search/users?q=${this.state.searchText}`)
            .then(({ data }) => {
                this.setState({
                    results: data.items
                })
            })
            .catch(error => {
                alert(JSON.stringify(error.response))
            })
    }

    handleInputChange = searchText => {
        this.setState({
            searchText
        }, () => {
            if (this.state.searchText && this.state.searchText.length > 1) {
                this.getInfo()
            }
        })
    }

    renderResultsList = (searchText) => {
        if (this.state.searchText.length !== 0)
            return <ResultsList
                searchText={this.state.searchText}
                results={this.state.results} />
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