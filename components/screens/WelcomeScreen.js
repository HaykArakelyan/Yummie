import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, StatusBar, TextInput } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Modalize } from "react-native-modalize"

import LoginScreen from './LoginScreen';
import CustomButton from "../reusable/CustomButton";
import { data } from '../data';


function WelcomeScreen(props) {
    const [index, setIndex] = useState(0);
    const registerRef = useRef(null);
    const loginRef = useRef(null);

    const openRegisterModalize = () => {
        registerRef.current?.open();
    }
    const openLoginModalize = () => {
        loginRef.current?.open();
    }

    function renderItem({ item }) {
        return (
            <View style={styles.carouselItemContainer}>
                <Image
                    source={item.image}
                    resizeMode={"contain"}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
                <Text style={styles.carouselItemHeading}>{item.heading}</Text>
                <Text style={styles.carouselItemSubheading}>{item.subHeading}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                    layoutCardOffset={10}
                    pagingEnabled
                    sliderWidth={300}
                    itemWidth={300}
                    data={data}
                    renderItem={renderItem}
                    onSnapToItem={index => setIndex(index)}
                />
            </View>
            <View>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: -5,
                        backgroundColor: "#EA6539",
                    }}
                    inactiveDotStyle={{
                        backgroundColor: "black",
                        width: 10,
                        height: 10
                    }}
                />
            </View>

            <View style={styles.welcomeButtons}>
                <CustomButton
                    buttonColor={"#F26333"}
                    title={"Get Started"}
                    textColor={"#ffffff"}
                    width={"80%"}
                    height={50}
                    marginBottom={10}
                    marginTop={10}
                    onPress={openRegisterModalize}
                />
                <CustomButton
                    buttonColor={""}
                    title={"Login"}
                    textColor={"#F26333"}
                    borderWidth={1}
                    borderColor={"#F26333"}
                    width={"80%"}
                    height={50}
                    marginBottom={10}
                    marginTop={10}
                    onPress={openLoginModalize}
                />
            </View>
            <View style={styles.policyContainer}>
                <Text style={styles.privacyPolicy}>
                    By using our mobile app, you agree to our Terms of Use and Privacy Policy
                </Text>
            </View>


            <Modalize ref={registerRef} modalHeight={500}>
                <TextInput placeholder='Search' />
            </Modalize>

            <Modalize ref={loginRef} modalHeight={500} scrollViewProps={{ scrollEnabled: false }}>
                <LoginScreen />
            </Modalize>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "#FFFFFF"
    },
    carouselItemContainer: {
        top: StatusBar.currentHeight,
        height: 400,
        alignItems: "center",
        paddingVertical: 50,
    },
    carouselItemHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#040C22",
        textAlign: "center",

    },
    carouselItemSubheading: {
        textAlign: "center",
        fontSize: 14,
    },
    carouselContainer: {
        width: "100%",
        alignItems: "center"
    },
    welcomeButtons: {
        width: "100%",
        marginTop: 70,
    },
    policyContainer: {
        width: "80%",
        paddingHorizontal: 5,
    },
    privacyPolicy: {
        textAlign: "center",
        fontSize: 13,
        color: "#5C616F",
        lineHeight: 18,
    }
})

export default WelcomeScreen;