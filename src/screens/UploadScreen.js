import React, { useState } from 'react'
import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import DocumentPicker from 'react-native-document-picker';

const UploadScreen = () => {
    const [singleFile, setSingleFile] = useState(null);
    const connectWallet = () => {
        alert('connectWallet button clicked!');
    }
    const selectFile = async () => {
        Alert.alert('select button clicked!');
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
            });
            // Printing the log realted to the file
            Alert.alert('res : ' + JSON.stringify(res));
            // Setting the state to show single file attributes
            setSingleFile(res);
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
    return (
        <View style={styles.containerAll}>
            <View style={styles.containerWalletBtn}>
                <TouchableOpacity style={styles.walletButton} onPress={() => { connectWallet }}>
                    <Text style={styles.btnText}>
                        Connect Wallet
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.headerText}>
                    Select your document to be uploaded to Ethereum Blockchain
                </Text>
                <TouchableOpacity style={styles.fileButton} onPress={() => { selectFile }}>
                    <Text style={styles.btnText}>
                        Select File
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerOut}>
                <Text style={styles.headerText}>
                    Output
                    IPFS Hash Stored on Eth Contract (Pls keep it safe):
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
        marginBottom: 20,
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