import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native'


const ResultsList = (props) => {
    
    return (
        <View
            style={styles.listContainer}>
            {props.isLoading ?
                <ActivityIndicator size="large" color="white" />
                :
                <View>
                    <Text style={styles.githubUsersText}>GITHUB USERS</Text>
                </View>}
            {props.results.length === 0 && props.isLoading === false
                ?
                <Text style={styles.notFoundText}>No Result Found For "{props.searchText}"</Text>
                :
                <FlatList
                    contentContainerStyle={styles.flatListContainer}
                    data={props.results}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => props.navigate('AccountViewer', { url: item.html_url })}
                            style={styles.listItem}>
                            <Image
                                source={{ uri: item.avatar_url }}
                                style={styles.itemImage}
                                resizeMode='contain'
                            />
                            <Text style={styles.usernameText}>{item.login}</Text>
                        </TouchableOpacity>
                    }
                />
            }

        </View>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#4078c0',
        maxHeight: 300,
        zIndex: 10,
        position: 'absolute',
        top: 70,
        left: 30,
        elevation: 5,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        right: 30
    },
    githubUsersText: {
        padding: 5,
        color: 'white',
        fontWeight: '700'
    },
    flatListContainer: {
        padding: 10,
    },
    listItem: {
        flexDirection: 'row',
        borderBottomColor: '#B0B0B0',
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    itemImage: {
        height: 50,
        width: 50,
        margin: 5
    },
    notFoundText: {
        alignSelf: 'center',
        color: 'white',
        padding: 15,
        fontSize: 18,
        fontWeight: '700'
    },
    usernameText: {
        color: 'white',
        fontWeight: '700'
    }
})
export { ResultsList }
