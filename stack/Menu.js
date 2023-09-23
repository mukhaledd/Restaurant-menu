import * as React from 'react';
import {  StyleSheet, Dimensions, ScrollView,View,Text,TouchableOpacity, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Drinks from '../Taps/drinks';
import Pizzas from '../Taps/pizzas';
import HOTDOGS from '../Taps/HotDogs';



const Tab = createMaterialTopTabNavigator();


const MyTap = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'rgb(45,165,70)',paddingTop:50 },
                tabBarLabelStyle: { color: 'white', fontSize: 14 },
                tabBarIndicatorStyle: { backgroundColor: '#FFF' },
            }}
        >
             <Tab.Screen name='Pizzas' component={Pizzas} />
            <Tab.Screen name='Drinks' component={Drinks} />
            <Tab.Screen name='HotDogs' component={HOTDOGS} />

        </Tab.Navigator>
    );
}



export default MyTap;