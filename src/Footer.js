import React from 'react';
import { StyleSheet, Text, View} from "react-native";

export function Footer() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>2020</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});
