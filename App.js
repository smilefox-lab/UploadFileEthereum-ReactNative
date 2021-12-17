import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StatusBar, StyleSheet, TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

/** Screens */
import UploadScreen from './src/screens/UploadScreen';
import DownloadScreen from './src/screens/DownloadScreen';

const TabStack = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabStack.Navigator
          tabBarOptions={{
            activeBackgroundColor: "#DDDDDD",
            inactiveBackgroundColor: "#FFFFFF",
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 16,
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
              tabBarIcon: () => (
                <MaterialCommunityIcons name="cloudupload" color={"#fffff"} size={10} />
              ),
            }}
          />
          <TabStack.Screen
            name={"Download"}
            component={DownloadScreen}
            options={{
              tabBarLabel: 'DOWNLOAD',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clouddownload" color={"#fffff"} size={10} />
              ),
            }}
          />
        </TabStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
const Style = StyleSheet.create();
