import React, { useState, useEffect } from 'react';
import ListItem from './app/components/lists/ListItem';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from './app/components/ImageInput';
import { Button, Image } from 'react-native';
import AppButton from './app/components/AppButton';

export default function App() {

  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
    </Screen>
  );

}