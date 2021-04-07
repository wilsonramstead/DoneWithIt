import React, { useState } from 'react';
import ListItem from './app/components/lists/ListItem';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {


  // ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions })

  return (
    <ListingEditScreen />
  );

}