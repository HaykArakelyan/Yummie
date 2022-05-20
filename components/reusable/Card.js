import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function Card({ name, price, oldPrice, sale, time, rank, foodInfo, openCardRef, setElement }) {

    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={() => {
            openCardRef(),
                setElement({
                    name,
                    price,
                    oldPrice,
                    sale,
                    rank,
                    time,
                    foodInfo
                })
        }}>
            <View style={styles.container}>
                <View style={styles.cardLeft}>
                    <ImageBackground source={require("../../assets/images/orders/ramen.png")} style={styles.itemImage}>
                        {sale !== "" && <View style={styles.itemSale}>
                            <Text style={styles.itemSaleText}>{sale}</Text>
                        </View>}
                    </ImageBackground>
                </View>
                <View style={styles.cardRight}>
                    <View style={styles.cardRightTop}>
                        <View style={styles.cardRightPriceContainer}>
                            <Text style={styles.cardRightPrice}>${price}</Text>
                            {oldPrice !== "" && <Text style={styles.cardRightOldPrice}>${oldPrice}</Text>}
                        </View>
                        <View style={{ width: 50 }}>
                            <Text style={styles.cardRightRank}>
                                <MaterialCommunityIcons
                                    name="star"
                                    size={18}
                                    color={"#F2C94C"}
                                />{rank}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardHeading}>
                        <Text style={styles.itemName}>{name}</Text>
                        <Text style={styles.itemTime}><MaterialCommunityIcons name='clock-time-five' size={13} color={"#5C616F"} /> {time} min</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 10,
        overflow: "hidden",
        width: "90%",
    },
    cardLeft: {
        width: 120,
    },
    itemImage: {
        borderRadius: 10,
        height: 120,
        width: "100%",
    },
    itemSale: {
        marginTop: 7,
        width: 50,
    },
    itemSaleText: {
        backgroundColor: "#E35959",
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        color: "#fff",
        paddingHorizontal: 3,
    },
    cardRight: {
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        height: 120,
        padding: 5,
        width: "70%",
    },
    cardRightTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
    },
    cardRightPriceContainer: {
        flexDirection: "row"
    },
    cardRightPrice: {
        color: "#F26333",
        fontSize: 18,
        fontWeight: "700",
    },
    cardRightOldPrice: {
        textDecorationLine: "line-through"
    },
    cardHeading: {
        height: "75%",
        justifyContent: "space-between",
        padding: 5,
        width: "80%"
    },
    itemName: {
        color: "#363D4E",
        fontSize: 16,
        fontWeight: "500",
    },
    itemTime: {
        color: "#5C616F",
        fontSize: 13,
    },

})

export default Card;