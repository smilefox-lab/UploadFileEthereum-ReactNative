import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  StatusBar, StyleSheet, TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

/** Screens */
import UploadScreen from './src/screens/UploadScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import HeaderComponent from './src/Components/HeaderComponent';

const TabStack = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    Alert.alert('WELCOME EthProcess');
  });
  return (
    <SafeAreaProvider>
      <HeaderComponent />
      <NavigationContainer>
        <TabStack.Navigator
          tabBarOptions={{
            inactiveBackgroundColor: "#FFFFFF",
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 15,
              lineHeight: 16,
              fontFamily: "Rubik_Regular"
            },
            style: {
              height: 60,
            },
            tabStyle: {
              height: 60,
            },
          }}
        >
          <TabStack.Screen
            name={"Upload"}
            component={UploadScreen}
            options={{
              tabBarLabel: 'UPLOAD',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='cloud-upload' size={30} color={color} />
              ),
            }}
          />
          <TabStack.Screen
            name={"Download"}
            component={DownloadScreen}
            options={{
              tabBarLabel: 'DOWNLOAD',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='cloud-download' size={30} color={color} />
              ),
            }}
          />
        </TabStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;