import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import { SearchBar, ResultsList } from '../components'
import axios from 'axios'

class SearchScreen extends Component {
    state = {
        searchText: '',
        results: [],
        isLoading: false
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <SearchBar
                    onChangeText={this.handleSearch}
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
            </SafeAreaView>
        )
    }

    getInfo = () => {
        axios.get(`https://api.github.com/search/users?q=${this.state.searchText}`)
            .then(({ data }) => {
                this.setState({
                    results: data.items,
                    isLoading: false
                })
            })
            .catch(error => {
                alert(JSON.stringify(error.response))
            })
    }

    handleSearch = searchText => {
        this.setState({
            searchText,
            isLoading: true
        }, () => {
            if (this.state.searchText.length > 1) {
                this.getInfo()
            }
        })
    }

    renderResultsList = searchText => {
        if (searchText.length > 1)
            return <ResultsList
                searchText={this.state.searchText}
                results={this.state.results}
                isLoading={this.state.isLoading} />
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
    },
    safeAreaStyle: {
        flex: 1
    }
})

export { SearchScreen }