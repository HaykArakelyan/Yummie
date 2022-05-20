import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function CustomButton({
    title,
    buttonColor,
    textColor,
    height = 60,
    width = "90%",
    marginTop = 70,
    marginBottom = 100,
    borderWidth = 0,
    borderColor = "#D9D0E3",
    borderStyle = "solid",
    onPress = null
}) {
    return (
        <TouchableOpacity style={{
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: buttonColor,
            borderColor: borderColor,
            borderRadius: 10,
            borderStyle: borderStyle,
            borderWidth: borderWidth,
            height: height,
            justifyContent: "center",
            marginBottom: marginBottom,
            marginTop: marginTop,
            width: width,
        }}
            onPress={onPress}
        >
            <Text style={{
                color: textColor,
                fontSize: 15,
                fontWeight: "bold",
            }}>{title}</Text>
        </TouchableOpacity>
    );
}
export default CustomButton;