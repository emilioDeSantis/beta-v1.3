import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from '../style';

const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={style.bottom_bar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key = {label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={style.bottom_bar_button}
                    >
                    {label == 'home' && isFocused && 
                        <Image
                            style={{width:30, height: 30,}}
                            source={require('../assets/icons/home_icon_yellow.png')}
                        />}
                    {label == 'home' && !isFocused && 
                        <Image
                            style={{width:20, height: 20,}}
                            source={require('../assets/icons/home_icon_yellow.png')}
                        />}
                    {label == 'create' && isFocused && 
                        <Image
                            style={{width:30, height: 30,}}
                            source={require('../assets/icons/create_icon_yellow.png')}
                        />}
                    {label == 'create' && !isFocused && 
                        <Image
                            style={{width:20, height: 20,}}
                            source={require('../assets/icons/create_icon_yellow.png')}
                        />}
                    {label == 'profile' && isFocused && 
                        <Image
                            style={{width:30, height: 30,}}
                            source={require('../assets/icons/profile_icon_yellow.png')}
                        />}
                    {label == 'profile' && !isFocused && 
                        <Image
                            style={{width:20, height: 20,}}
                            source={require('../assets/icons/profile_icon_yellow.png')}
                        />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomTabBar
