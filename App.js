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
import ImageInputList from './app/components/ImageInputList';
import { Button, Image } from 'react-native';
import AppButton from './app/components/AppButton';

import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails", {id: 1 })} />
  );
};

const Tweets =  ({ navigation  }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator  = () => (
  <Stack.Navigator
    screenOptions={{
      // title: 'tweetDetails: ' + route.params.id, 
      headerStyle: {backgroundColor: 'dodgerblue'}, 
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={({ route }) => ({ title: 'tweetDetails: ' + route.params.id, headerStyle: {backgroundColor: 'dodgerblue'}, headerTintColor: 'white' })} />
  </Stack.Navigator>
);

const Account  =  () => <Screen><Text>Account</Text></Screen>;

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen 
      name="Feed" 
      component={StackNavigator} 
      options={{
        tabBarIcon: ({ size, color })  => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
    />
    <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({ size, color })  => <MaterialCommunityIcons name="account" size={size} color={color} />
      }}
    />
  </Tab.Navigator> 
);


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

