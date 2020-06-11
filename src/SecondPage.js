import React from 'react';
import {Image, StyleSheet, View} from "react-native";


export function SecondPage({infoItem}) {
    return (
            <View style={styles.img}>
                <Image
                    style={styles.pict}
                    source={{uri: infoItem.urls.small}}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    pict: {
        width: '100%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
    }
});
