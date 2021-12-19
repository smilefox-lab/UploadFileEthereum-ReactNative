import React, { useState } from 'react'
import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native'
// import ipfs from '../../utils/ipfs'
// import web3 from '../../utils/web3'

const DownloadScreen = () => {
    const [curfile, setCurfile] = useState('');

    const btnClick = async () => {
        console.log('file.path');
        Alert.alert('download button clicked!');
        try {
            // for await (const file of ipfs.get(curfile)) {
            // console.log(file.path)
            console.log('file.path');
            // for await (const chunk of file.content) {
            // content.append(chunk)
            // }
            // }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.containerAll}>
            <View>
                <Text style={styles.headerText}>Please input IPFS Hash Stored on Eth Contract below.</Text>
                <View style={styles.containerBelow}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setCurfile}
                        placeholder="Input file PrivateKey!"
                    />
                    <TouchableOpacity style={styles.button} onPress={() => { btnClick }}>
                        <Text style={styles.btnText}>
                            Download
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        {curfile}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default DownloadScreen
const styles = StyleSheet.create({
    containerAll: {
        flex: 3,
        paddingLeft: 30,
        paddingTop: 30,
    },
    containerBelow: {
        paddingTop: 30,
        paddingRight: 30,
        flex: 5,
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    textInput: {
        width: 50,
        height: 50,
        flex: 1,
        borderWidth: 1,
        height: 40,
        minWidth: 200,
        marginRight: 10,
        padding: 10,
    },
    button: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#4CAF50',
        minWidth: 120,
        height: 40,
    },
    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});