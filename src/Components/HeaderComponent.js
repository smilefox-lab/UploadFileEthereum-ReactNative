import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const HomeComponent = () => {
    return (
        <View style={Style.container}>
            <Text style={Style.textTitle}>EthProcess</Text>
            <Text style={Style.textDes}>Ethereum Blockchain and IPFS File Processing</Text>
        </View>
    )
}

export default HomeComponent
const Style = StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: 30,
        paddingTop: 20,
        flexDirection: 'column',
        height: 100,
        backgroundColor: '#e91e63',
    },
    textTitle: {
        color: '#fff',
        fontSize: 30,
    },
    textDes: {
        color: '#fff',
        fontSize: 15,
    }
})