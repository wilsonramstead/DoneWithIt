import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    // mode option below: 'model' is up/down, 'card' is left/right
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;