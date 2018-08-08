import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'


const ResultsList = (props) => {
    return (
        <View
            style={styles.listContainer}>
            {props.results.length < 1 ?
                <Text style={styles.notFoundText}>No Result Found For "{props.searchText}"</Text>
                :
                <FlatList
                    contentContainerStyle={styles.flatListContainer}
                    data={props.results}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={styles.listItem}
                        >
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
        top: 75,
        left: 30,
        right: 30
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
