import * as React from 'react';
import { View, Text, Button } from 'react-native';
import PostComp from '../components/Post'
import Amplify, { Storage } from 'aws-amplify'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as storage from '../functions/storage'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import Stream from '../components/Stream'

import style from '../style';

const fetchPosts = async (page, limit) => {
    const options = {
        sort: s => s.createdAt(SortDirection.DESCENDING)
    }
    // const db_data = await DataStore.query(Post, predicate, options)
    const db_data = await DataStore.query(Post)
    console.log('data... ',db_data);
    const posts = await storage.format_posts(db_data)
    // console.log('posts form db... ',posts);
    return posts
}

const TopScreen = () => {

    return (
        <View style={style.post_stream}>
            <Stream Article={PostComp} fetchArticles={fetchPosts}/>
        </View>
    )
}

export default TopScreen;