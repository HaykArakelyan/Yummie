import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

function ProductScreen({ element }) {

    //This part could be in the redux, but since I dont have a CartScreen, I didn't add it
    const [counter, setCounter] = useState(1);
    const deleteFromCart = () => {
        if (counter === 0) {
            return;
        }
        setCounter(counter - 1)
    }
    const addToCart = () => {
        setCounter(counter + 1)
    }

    const ingredients = [
        require("../../assets/images/ingredients/lettuce.png"),
        require("../../assets/images/ingredients/tomatoes.png"),
        require("../../assets/images/ingredients/eggs.png"),
        require("../../assets/images/ingredients/corn.png"),
        require("../../assets/images/ingredients/pea.png"),
    ]

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='contain'
                style={styles.productImage}
                source={require("../../assets/images/orders/ramen.png")}
            >
                <MaterialCommunityIcons
                    style={styles.imageLikeIcon}
                    name='heart-outline'
                    size={30}
                    color="white"
                />
            </ImageBackground>
            <View style={styles.productHeadingContainer}>
                <View style={styles.productHeadingTop}>
                    <Text style={styles.header}>{element.name}</Text>
                    <Text style={styles.subHeader}>
                        <MaterialCommunityIcons
                            name={"star"}
                            size={16}
                            color={"#F2C94C"}
                        /> {element.rank}  <MaterialCommunityIcons
                            name='clock-time-five'
                            size={16}
                            color={"#5C616F"}
                        /> {element.time} min
                    </Text>
                </View>
                <View style={styles.productHeadingBottom}>
                    <Text style={styles.price}>${element.price}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.productOldPrice}>${element.oldPrice} </Text>
                        <Text style={styles.productNewPrice}>{element.sale} OFF</Text>
                    </View>
                </View>

            </View>
            <View style={styles.productMessegeContainer}>
                <Text style={styles.productMessegeText}>
                    Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the  pulvinar tristique the food.
                </Text>
            </View>
            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsHeading}>Main Ingredients</Text>
                <View style={styles.ingredientsImagesContainer}>
                    {ingredients.map((imgUri) => <Image style={styles.ingredientsImages} key={imgUri} source={imgUri} />)}
                </View>
            </View>
            <View style={styles.foodInfoContainer}>
                <Text>Food Information</Text>
                <View style={styles.infoBoxContainer}>
                    {element.foodInfo.map((elem) =>
                        <View key={elem} style={styles.infoBox}>
                            {(function () {
                                if (elem === "1990 kal") {
                                    return (
                                        <MaterialCommunityIcons name='fire' size={20} color={"#F55053"} />
                                    )
                                }
                                if (elem === "Organic") {
                                    return (
                                        <MaterialCommunityIcons name='seed' size={20} color={"#00B167"} />
                                    )
                                }
                                if (elem === "Free Gluten") {
                                    return (
                                        <MaterialCommunityIcons name='corn-off' size={20} color={"#F26333"} /> // No Gluten Icon
                                    )
                                }
                            })()}
                            <Text style={styles.infoText}> {elem}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.addToCartContainer}>
                <View style={styles.addToCartLeft}>
                    <Text onPress={() => deleteFromCart()} style={styles.deleteFromCart}>-</Text>
                    <Text style={styles.showNumber}>{counter}</Text>
                    <Text onPress={() => addToCart()} style={styles.addToCart}>+</Text>
                </View>
                <TouchableOpacity style={styles.addToCartRight} onPress={() => setCounter(0)}>
                    <Text style={styles.addToCartButtonText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: 30,
    },
    productImage: {
        alignItems: "flex-end",
        alignSelf: "center",
        borderRadius: 15,
        height: 370,
        overflow: "hidden",
        width: 370,
    },
    imageLikeIcon: {
        marginRight: 10,
        marginTop: 15,
    },
    productHeadingContainer: {
        flexDirection: "row",
        marginTop: 30,
    },
    productHeadingTop: {
        width: "60%",
    },
    header: {
        color: "#040C22",
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 24,
    },
    subHeader: {
        marginTop: 8,
    },
    productHeadingBottom: {
        width: "40%"
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    price: {
        alignSelf: "flex-end",
        color: "#F26333",
        fontSize: 28,
        lineHeight: 32,
    },
    productOldPrice: {
        alignSelf: "flex-end",
        color: "#A7AAB2",
        textDecorationLine: "line-through",
    },
    productNewPrice: {
        color: "#5C616F",
        fontWeight: "600",
    },
    productMessegeContainer: {
        marginTop: 15,
    },
    productMessegeText: {
        fontSize: 15,
    },
    ingredientsContainer: {
        marginTop: 15,
    },
    ingredientsHeading: {
        color: "#363D4E",
        fontSize: 16,
        fontWeight: "600",
    },
    ingredientsImagesContainer: {
        flexDirection: "row",
    },
    ingredientsImages: {
        height: 50,
        margin: 15,
        marginLeft: 0,
        width: 50,
    },
    infoBoxContainer: {
        flexDirection: "row",
    },
    infoBox: {
        backgroundColor: "#CDD4DB",
        borderRadius: 5,
        flexDirection: "row",
        marginRight: 10,
        marginTop: 15,
        padding: 10,
    },
    infoText: {
        color: "#363D4E",
        fontSize: 13,
        fontWeight: "500",
    },
    addToCartContainer: {
        flexDirection: "row",
        marginTop: 10,
        paddingVertical: 15,
        width: "100%",
    },
    addToCartLeft: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "40%",
    },
    deleteFromCart: {
        backgroundColor: "#E8EBEE",
        borderRadius: 10,
        color: "#363D4E",
        fontSize: 16,
        height: 40,
        padding: 5,
        textAlign: "center",
        textAlignVertical: 'center',
        width: 40,
    },
    showNumber: {
        color: "#363D4E",
        fontSize: 16,
        height: 40,
        padding: 5,
        textAlign: "center",
        textAlignVertical: 'center',
        width: 40,
    },
    addToCart: {
        backgroundColor: "#E8EBEE",
        borderRadius: 10,
        color: "#363D4E",
        fontSize: 16,
        height: 40,
        padding: 5,
        textAlign: "center",
        textAlignVertical: 'center',
        width: 40,
    },
    addToCartRight: {
        alignItems: "center",
        backgroundColor: "#F26333",
        borderRadius: 10,
        justifyContent: "center",
        padding: 25,
        width: "60%",
    },
    addToCartButtonText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "600",
    }
})

export default ProductScreen;