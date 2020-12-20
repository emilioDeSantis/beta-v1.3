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
import * as storage from './storage'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

export const toArray = (text) => {
    text = text.replace('  ', ' ')
    const array = text.split(' ')
    let new_array = [] 
    array.map(item => {
        if (item != '') {
            new_array.push(item)
        }
    })
    return new_array
}

export const format_tri_posts = (posts) => {
    let tri_post = []
    let tri_posts = []
    for (var i = 0; i < posts.length; i++) {
        tri_post.push(posts[i])
        if((i+1)%3==0){
            const tri_post_with_key = {key: uuidv4(),tri_post}
            tri_posts.push(tri_post_with_key)
            tri_post = []
        }
    }
    if(tri_post.length!=0){
        const tri_post_with_key = {key: uuidv4(),tri_post}
        tri_posts.push(tri_post_with_key)    
    }
    return tri_posts
}

export const format_hashtags = (hashtags) => {
    const hashtags_with_key = hashtags.map((hashtag) => {
        hashtag.key = uuidv4()
        return hashtag
    })
    return hashtags_with_key
}

export const go_to_recipe = async(post,navigation) => {
    const db_data = await DataStore.query(Chef, post.recipe.chefID);
    const chef = await storage.format_chef(db_data)
    const recipe = await storage.format_chef(post.recipe)
    navigation.navigate('recipe',{recipe, chef})
}