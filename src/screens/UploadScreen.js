import React, { useState } from 'react'
import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import 'react-native-gesture-handler';

// const createIpfs =  require('ipfs-http-client');
// const ipfs = createIpfs('https://ipfs.infura.io:5001/api/v0')

const UploadScreen = () => {
    const [singleFile, setSingleFile] = useState(null);
    const [pagehash, setPagehash] = useState('');
    let connectWallet = () => {
        Alert.alert('connectWallet button clicked!');
    }
    let selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
            });
            // Setting the state to show single file attributes
            setSingleFile(res);
            uploadFile();
        } catch (err) {
            setSingleFile(null);
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                Alert.alert('Canceled');
            } else {
                // For Unknown Error
                Alert.alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }
    let uploadFile = async () => {
        try {
            // const added = await ipfs.add(singleFile)
            // const obtainpagehash = `${added.path}`
            // setPagehash(obtainpagehash)
            // console.log('sending ' + obtainpagehash + ' to the contract');
            // contract.set(obtainpagehash);
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }
    return (
        <View style={styles.containerAll}>
            <View style={styles.containerWalletBtn}>
                <TouchableOpacity style={styles.walletButton} onPress={() => { connectWallet() }}>
                    <Text style={styles.btnText}>
                        Connect Wallet
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.headerText}>
                    Select your document to be uploaded to Ethereum Blockchain
                </Text>
                <TouchableOpacity style={styles.fileButton} onPress={() => { selectFile() }}>
                    <Text style={styles.btnText}>
                        Select File
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerOut}>
                <Text style={styles.headerText}>
                    Output:
                    IPFS Hash Stored on Eth Contract (Pls keep it safe):
                </Text>
                <Text>
                QmNN4gKj1L7ov68H7YEZ8tP6LpEnbSJQZm3w193BdSjrW3
                </Text>
            </View>
        </View>
    )
}
export default UploadScreen

const styles = StyleSheet.create({
    containerAll: {
        flex: 3,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
    },
    containerWalletBtn: {
        alignItems: 'flex-end',
        paddingBottom: 20,
    },
    containerForm: {
        paddingTop: 20,
        borderTopWidth: 1,
        paddingBottom: 20,
    },
    containerOut: {
        flex: 1,
        paddingTop: 20,
        borderTopWidth: 1,
    },
    headerText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    walletButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        minWidth: 120,
        height: 40,
    },
    fileButton: {
        marginTop: 20,
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