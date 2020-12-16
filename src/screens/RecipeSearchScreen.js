import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import TriPost from '../components/TriPost';
import Amplify, { Storage } from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models';
import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { StackActions, useNavigationState } from '@react-navigation/native';

import * as storage from '../functions/storage'
import Stream from '../components/Stream'
import style from '../style';


const RecipeSearchScreen = (props) => {

    const fetchPosts = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        let tri_post = []
        let tri_posts = []
        for (var i = 0; i < posts.length; i++) {
            tri_post.push(posts[i])
            if((i+1)%3==0){
                tri_posts.push(tri_post)
                tri_post = []
            }
        }
        return tri_posts
    }

    const index = useNavigationState(state => state.index)
    useEffect(() => {
        props.set_index(index)
    },[index])

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts} search={props.search}/>
        </View>
    );
}

export default RecipeSearchScreen;