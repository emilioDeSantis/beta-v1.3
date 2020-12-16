import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationScreen from './screens/AuthenticationScreen'
import BottomBar from './navigation/BottomBar'
import ChefScreen from './screens/ChefScreen'
import RecipeScreen from './screens/RecipeScreen'
import { UserProvider } from './context'

const Stack = createStackNavigator();

const chef = {
    username: 'bob',
    n_followers: 397,
    n_following: 223,
    n_remakes: 132,
    biography: 'jkhg kjhg dsy usgd jhcg'
}

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'} initialRouteName={'bottom bar'}>
                    <Stack.Screen name="bottom bar" component={BottomBar} />
                    <Stack.Screen name="chef">
                        {() => <ChefScreen chef={chef} is_profile={false}/>}
                    </Stack.Screen>
                    <Stack.Screen name="recipe" component={RecipeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App


