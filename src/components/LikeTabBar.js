<<<<<<< HEAD
//Copyright 2020, Provecho, All rights reserved.

=======
>>>>>>> b627f3be9b2dc1bcab9996805e1a7667880f9ba6
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from './BackButton'
import style from '../style';

const LikeTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={style.like_modal_tab_bar}>
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
                        style={style.like_modal_tab_bar_button}
<<<<<<< HEAD
                        activeOpacity={1}
=======
>>>>>>> b627f3be9b2dc1bcab9996805e1a7667880f9ba6
                    >
                        <Text style={{ color: isFocused ? '#f98' : '#333536' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
<<<<<<< HEAD
=======
            {/* <TouchableOpacity
                key = 'back to post'
                accessibilityRole="button"
                onPress={() => navigation.goBack()}
                style={style.like_back_button}
            >
                <Text>
                    back
                </Text>
            </TouchableOpacity> */}
>>>>>>> b627f3be9b2dc1bcab9996805e1a7667880f9ba6
        </View>
    );
}

export default LikeTabBar
