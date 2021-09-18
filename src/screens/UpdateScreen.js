import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UpdateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Updates</Text>
        </View>
    )
}

export default UpdateScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
			backgroundColor: "white",
			justifyContent: "center",
			alignItems: "center"
		}
})
