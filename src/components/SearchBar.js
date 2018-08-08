import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'


const SearchBar = (props) => {
    return (
        <View style={styles.searchBarContainer}>
            <Image
                source={require('../assets/searchIcon.png')}
                style={styles.searchIconImage}
                resizeMode="contain"
            />
            <TextInput
                style={styles.searchInput}
                onChangeText={props.onChangeText}
                placeholder="Search for..."
                underlineColorAndroid='transparent'
                value={props.value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        margin: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        elevation: 5
    },
    searchIconImage: {
        height: 24,
        width: 24,
        flex: 0.5
    },
    searchInput: {
        flex: 3.5
    }
})

export { SearchBar }
