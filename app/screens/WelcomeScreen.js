import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, Button } from 'react-native';

import colors from '../config/colors';


function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            {/* <View style={styles.loginButton}></View> */}
            {/* <View style={styles.registerButton}></View> */}

            <Button style={styles.loginButton} color={colors.primary} title="Login"></Button>
            <Button style={styles.registerButton} color={colors.secondary} title="Register"></Button>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
})

export default WelcomeScreen;