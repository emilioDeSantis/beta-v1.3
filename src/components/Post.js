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

    const navigation = useNavigation();


    return (
        <TouchableOpacity 
            style= {style.recipe_button}
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

const LikeButton = (props) => {
    const navigation = useNavigation()

    return(
        <View style={style.like_button_container}>
            <TouchableOpacity 
                style= {style.like_button}
                onPress={() => alert('like')}
            >
                <Text>like</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal', 'likes')
                }}
            >
                <Text style={style.number_text}>422</Text>
            </TouchableOpacity> 
        </View>
    )
}

const CommentButton = (props) => {
    const navigation = useNavigation()
    return(
        <View style={style.comment_button_container}>
            <TouchableOpacity 
                style= {style.comment_button}
                onPress={() => alert('comment')}
            >
                <Text>comment</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal', 'comments')
                }}
            >
                <Text style={style.number_text}>142</Text>
            </TouchableOpacity> 
        </View>
    )
}

const TipButton = (props) => {
    const navigation = useNavigation()
    return(
        <View style={style.tip_button_container}>
            <TouchableOpacity 
                style= {style.tip_button}
                onPress={() => alert('tip')}
            >
                <Text>tip</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal', 'tips')
                }}
            >
                <Text style={style.number_text}>127</Text>
            </TouchableOpacity> 
        </View>
    )
}

function PostComp(props) {

    console.log('props... ', props);
    return (
        <View style={style.post}>
            <Text style={{
                position: 'absolute',
                top: 50,
                left: 140,
            }}>
                {props.chef.username}
            </Text>
            <RecipeButton {...props} image={props.image}/>
            <ChefThumbnail chef={props.chef}/>
            <LikeButton/>
            <CommentButton/>
            <TipButton/>
        </View>
    );
}

export default PostComp;