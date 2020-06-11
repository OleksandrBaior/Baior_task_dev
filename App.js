//lib
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


//comp
import {FirstPage} from "./src/FirstPage";
import {Header} from "./src/Header";
import {Footer} from "./src/Footer";
import {SecondPage} from "./src/SecondPage";
import {block} from "react-native-reanimated";

const Stack = createStackNavigator();


export default function App() {
    const [data, setData] = useState({
        items: [],
        infoItem: [],
    });

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then((response) => response.json())
            .then((data) => setData({items: data}))
    }, []);

    function getInfoItem(item) {
        setData({...data, infoItem: item});
    }

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Header/>
                <Stack.Navigator >
                    <Stack.Screen name="Home" options={{
                        headerStyle: {
                            height: 50,
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            height: 45,
                        }

                    }} >
                        {props => <FirstPage {...props}
                                             data={data.items}
                                             getInfoItem={getInfoItem}/>}
                    </Stack.Screen>

                    <Stack.Screen name="Details"
                                  options={{
                                      headerStyle: {
                                          height: 50,
                                      },
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                          height: 50,
                                      }
                                  }}
                    >
                        {props => <SecondPage {...props}
                                              infoItem={data.infoItem}/>}
                    </Stack.Screen>
                </Stack.Navigator>
                <Footer/>

            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



