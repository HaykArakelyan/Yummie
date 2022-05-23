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
            <View>
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
            <View>
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
        height: 500,
        marginTop: 50,
        padding: 20,
    },
    loginHeading: {
        color: "#040C22",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "left",
    },
    loginSubehading: {
        color: "#363D4E",
        fontSize: 16,
        marginBottom: 20,
        marginTop: 10,
        textAlign: "left",
    },
    loginInputsContainer: {
        alignItems: "center",
    },
    loginInput: {
        backgroundColor: "#E8EBEE",
        width: "100%",// should be here
        padding: 10,
        marginVertical: 5,
        height: 60,
        borderRadius: 10,
    },
})

export default LoginScreen;