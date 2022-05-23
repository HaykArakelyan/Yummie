import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { useNavigation } from "@react-navigation/native";

function LoadingScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("WelcomeScreen");
        }, 1000);
    }, [])


    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/BrandLogo.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default LoadingScreen;