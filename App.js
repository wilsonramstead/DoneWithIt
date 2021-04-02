import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Alert, Button, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import colors from './app/config/colors';
import AppButton from './app/components/AppButton';


export default function App() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <AppButton title="Login" onPress={() => console.log('login clicked')} />

    </View>
  );


}
