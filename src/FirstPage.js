import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";

export function FirstPage({navigation, data, getInfoItem}) {
    return (
        <ScrollView>
            <View style={styles.items}>
                {data.map((item) => {
                    return (
                        <View key={item.id} style={styles.image}>
                            <TouchableOpacity
                                style={styles.i}
                                onPress={() => {
                                    getInfoItem(item)
                                    navigation.navigate('Details');
                                }}>
                                <Image
                                    style={styles.pict}
                                    source={{
                                        uri: item.urls.small
                                    }}/>
                            </TouchableOpacity>
                            <Text style={styles.text}>{item.user.name}</Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '50%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        margin: 0,
        padding: 0
    },
    pict: {
        width: '100%',
        height: 150,
    },
    items: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    text: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
    },
    i: {
        width: '100%',
    }
});










