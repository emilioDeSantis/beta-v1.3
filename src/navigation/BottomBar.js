import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CreateScreen from '../screens/CreateScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import BottomTabBar from '../components/BottomTabBar'

const Tab = createBottomTabNavigator();

function BottomBar ({ navigation }) {
    return (
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="create" component={CreateScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomBar;