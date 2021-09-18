import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavouriteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Favourites</Text>
        </View>
    )
}

export default FavouriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
			backgroundColor: "white",
			justifyContent: "center",
			alignItems: "center"
		}
})
