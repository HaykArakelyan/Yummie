import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


function Filter({ title, isActive, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress()} style={isActive ? styles.activeContainer : styles.container}>
            <Text style={isActive ? styles.activeTitle : styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8EBEE",
        borderRadius: 5,
        padding: 5,
        marginRight: 15
    },
    title: {
        color: "#5C616F",
        fontWeight: "600",
    },
    activeContainer: {
        backgroundColor: "#F26333",
        borderRadius: 5,
        padding: 5,
        marginRight: 15
    },
    activeTitle: {
        color: "#FFEBE4",
        fontWeight: "600",
    }
})

export default Filter;