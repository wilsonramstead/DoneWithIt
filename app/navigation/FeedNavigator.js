import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    // mode option below: 'model' is up/down, 'card' is left/right
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;