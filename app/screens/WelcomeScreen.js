import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, Button } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function WelcomeScreen({ navigation }) {

    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton color="secondary" title="Register" onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})

export default WelcomeScreen;