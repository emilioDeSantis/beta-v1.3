import * as React from 'react';
import { View, Text, Button } from 'react-native';
import PostComp from '../components/Post'
import Amplify, { Storage } from 'aws-amplify'

import { createStackNavigator } from '@react-navigation/stack';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as storage from '../functions/storage'
import LikeModal from '../components/LikeModal'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import Stream from '../components/Stream'
import AuthenticationScreen from './AuthenticationScreen'

import { useUser, useSetUser } from '../context'
import style from '../style';

const fetchPosts = async (page, limit, user_id) => {
    const follows = (await DataStore.query(Follow)).filter(c => c.followerID === user_id)
    const following_ids = follows.map(follow => follow.followingID)
    const predicate = c => c.or(
        c => {
            following_ids.forEach(id => {
                c = c.chefID("eq", id)
            })
        }
    )
    const options = {
        sort: s => s.createdAt(SortDirection.DESCENDING)
    }
    const db_data = await DataStore.query(Post, c => c.chefID("eq", "7e47fd2c-1cfd-4e8d-bda6-3114146171db"), options)
    // const db_data = await DataStore.query(Post, predicate, options)
    // const db_data = await DataStore.query(Post)
    console.log('data... ',db_data);
    const posts = await storage.format_posts(db_data)
    // console.log('posts form db... ',posts);
    return posts
}

const FeedScreenComp = () => {

    return (
        <View style={style.post_stream}>
            <Stream Article={PostComp} fetchArticles={fetchPosts}/>
        </View>
    )
}

const Stack = createStackNavigator();

const FeedScreen = () => {
    return (
        <Stack.Navigator mode="modal" headerMode={'none'} transparentCard={true}>
            <Stack.Screen name="top screen">
                {(props) => <FeedScreenComp {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="like modal">
                {(props) => <LikeModal {...props}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default FeedScreen;





