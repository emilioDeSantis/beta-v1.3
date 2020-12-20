import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation, useNavigationBuilder, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import style from '../style';
import Amplify, { Storage } from 'aws-amplify'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as storage from '../functions/storage'
import * as global from '../functions/global'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import ChefThumbnail from './ChefThumbnail'


function RecipeButton(props) {

    // console.log('post!!!... ',props);

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style= {style.tri_recipe_button}
            onPress={() => global.go_to_recipe(props,navigation)}
        >
            <Image
                style = {{
                    height: '100%'
                }}
                source={{
                    uri: props.image,
                }}
            />
        </TouchableOpacity>
    );
}

function TriPost(props) {

    console.log('tripost porps... ', props);
    return (
        <View style={style.tri_post_row}>
            {props.tri_post.map(post => {
                return (
                    <View style={style.tri_post}>
                        <RecipeButton {...post} image={post.image}/>
                    </View>
                )
            })}
        </View>
    )
}

export default TriPost;