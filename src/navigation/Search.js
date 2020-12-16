import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackActions, useNavigationState } from '@react-navigation/native';

import RecipeSearchScreen from '../screens/RecipeSearchScreen'
import HashtagSearchScreen from '../screens/HashtagSearchScreen'
import ChefSearchScreen from '../screens/ChefSearchScreen'

import SearchBar from '../components/SearchBar'
import SearchTabBar from '../components/SearchTabBar';


import * as global from '../functions/global'

const Tab = createBottomTabNavigator();

function Search ({ navigation }) {


    const [search, setSearch] = useState('')
    const [recipe_search, set_recipe_search] = useState([])
    const [hashtag_search, set_hashtag_search] = useState([])
    const [chef_search, set_chef_search] = useState([])
    const [index, set_index] = useState('')
    const set_search = async (index, array) => {
        if(index == 0) {
            await set_recipe_search(array)
        } else if (index == 1) {
            await set_hashtag_search(array)
        } else {
            await set_chef_search(array)
        }
        return 'success'
    } 
    const on_return = async() => {
        console.log('search... ',search);
        console.log('index... ',index);
        const array = await global.toArray(search)
        // console.log('array... ',array);
        await set_search(index, array)
    }



    //save array of serahc itens in each screen and retrun set the array and runs the firts load fucntion

    return (
        <>
            <View style={{flexDirection:'row', top: 0,  alignItems: 'center', justifyContent: 'center' }}>
                <SearchBar search={search} setSearch={setSearch} on_return={on_return}></SearchBar>
            </View>
            <Tab.Navigator tabBar={props => <SearchTabBar {...props} />} initialRouteName={'top'}>
                <Tab.Screen name="recipe search">
                    {(props) => <RecipeSearchScreen {...props} search={recipe_search} set_index={set_index}/>}
                </Tab.Screen>
                <Tab.Screen name="hashtag search">
                    {(props) => <HashtagSearchScreen {...props} search={hashtag_search}/>}
                </Tab.Screen>
                <Tab.Screen name="chef search">
                    {(props) => <ChefSearchScreen {...props} search={chef_search}/>}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
}

export default Search;