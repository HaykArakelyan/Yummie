import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { useSelector } from "react-redux"
import { Modalize } from "react-native-modalize";

import Card from '../reusable/Card';
import Filter from '../reusable/Filter';
import ProductScreen from './ProductScreen';

function OrderScreen(props) {
    const [element, setElement] = useState({})
    const { _W } = useSelector((state) => state.getOrders.orders);
    const [data, setData] = useState(_W)
    const filters = useSelector((state) => state.getFilters.filters);

    const cardRef = useRef(null);
    const openCardRef = () => {
        cardRef.current?.open();
    }

    const changeActive = (type) => {
        filters.map((item) => {
            if (item.type === type) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        })
    }

    const handlePress = (type) => {
        changeActive(type);
        if (data.length > 0) {
            setData(_W);
        }
        if (type === "All Menu") {
            setData(_W);
        } else {
            setData(_W.filter((item) => item.type === type))
        }
    }

    return (

        <View style={styles.container}>

            <View style={styles.filtersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {filters.map((items) =>
                        <Filter
                            key={items.type}
                            title={items.type}
                            isActive={items.isActive}
                            onPress={() => handlePress(items.type)}
                        />
                    )}
                </ScrollView>
            </View>
            <View style={styles.ordersListContainer}>
                <ScrollView >
                    <View style={styles.ordersList}>
                        {data.length != 0 && data.map((items) => <Card
                            key={items.id}
                            name={items.name}
                            price={items.price}
                            oldPrice={items.oldPrice}
                            sale={items.sale}
                            rank={items.rank}
                            time={items.time}
                            image={items.image}
                            foodInfo={items.foodInfo}
                            openCardRef={() => openCardRef()}
                            setElement={setElement}
                        />
                        )}
                    </View>
                </ScrollView>
            </View>
            <Modalize ref={cardRef} modalHeight={750} handlePosition={'inside'}>
                <ProductScreen element={element} />
            </Modalize>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F7F8",
        flex: 1,
        justifyContent: "flex-end",
    },
    filtersContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    ordersListContainer: {
        height: 650,
    },
    ordersList: {
        alignSelf: "center",
    },

})

export default OrderScreen;