import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from "react-native";


export function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Welcome to my test App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
