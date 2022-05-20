import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import CustomButton from '../reusable/CustomButton';

import { useNavigation } from "@react-navigation/native";

function LoginScreen(props) {
    const navigation = useNavigation();

    const handleLogIn = () => {
        navigation.navigate("OrderScreen");
    }
    return (
        <View style={styles.container}>
            <View style={styles.loginHeadingsContainer}>
                <Text style={styles.loginHeading}>Log in</Text>
                <Text style={styles.loginSubehading}>We use this information to facilitate transactions on this applicaton</Text>
            </View>

            <View style={styles.loginInputsContainer}>
                <TextInput
                    placeholder='Full Name'
                    style={styles.loginInput}
                />
                <TextInput
                    placeholder='Email Address'
                    style={styles.loginInput}
                />
            </View>
            <View style={styles.loginButton}>
                <CustomButton
                    title={"Login"}
                    height={50}
                    buttonColor={"#F26333"}
                    width={"100%"}
                    textColor={"#FFFFFF"}
                    onPress={handleLogIn}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: "center",
        height: 500,
        padding: 20,
    },
    loginHeadingsContainer: {
        // alignItems: "center",
        width: "100%"
    },
    loginHeading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#040C22",
        textAlign: "left",
        marginTop: 10
    },
    loginSubehading: {
        textAlign: "left",
        fontSize: 16,
        color: "#363D4E",
        marginTop: 10,
        marginBottom: 20,
        width: "80%"
    },
    loginInputsContainer: {
        width: "100%",
        alignItems: "center",
    },
    loginInput: {
        backgroundColor: "#E8EBEE",
        width: "100%",
        padding: 10,
        marginVertical: 5,
        height: 60,
        borderRadius: 10,
    },
    loginButton: {
        width: "100%"
    },
})

export default LoginScreen;