import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import 'react-native-gesture-handler';

const DownloadScreen = () => {
    const [curfile, setCurfile] = useState('');
    useEffect(() => {
        request_storage_runtime_permission();
    })
    let request_storage_runtime_permission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    'title': 'ReactNativeCode Storage Permission',
                    'message': 'ReactNativeCode App needs access to your storage to download Photos.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                Alert.alert("Storage Permission Granted.");
            }
            else {

                Alert.alert("Storage Permission Not Granted");

            }
        } catch (err) {
            console.warn(err)
        }
    }
    let getExtention = (filename) => {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
            undefined;
    }
    const fileDownload = async () => {
        if (!curfile) {
            Alert.alert("Please enter hash key for the document to download!");
            return;
        }
        try {
            var date = new Date();
            var image_URL = "https://ipfs.io/ipfs/" + curfile;
            var ext = getExtention(image_URL);
            ext = "." + ext[0];
            const { config, fs } = RNFetchBlob;
            let PictureDir = fs.dirs.PictureDir
            let options = {
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: PictureDir + "/image_" + Math.floor(date.getTime()
                        + date.getSeconds() / 2) + ext,
                    description: 'Image'
                }
            }
            config(options).fetch('GET', image_URL).then((res) => {
                Alert.alert("Image Downloaded Successfully.");
            });
            console.log('file.path');
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
                    <TouchableOpacity style={styles.button} onPress={() => { fileDownload() }}>
                        <Text style={styles.btnText}>
                            Download
                        </Text>
                    </TouchableOpacity>
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