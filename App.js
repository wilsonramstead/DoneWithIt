import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Alert, Button, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import colors from './app/config/colors';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';


export default function App() {
  return <WelcomeScreen/>;


}