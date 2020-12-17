import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import HashtagPost from './HashtagPost'
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
import { v4 as uuidv4 } from 'uuid';

import * as global from '../functions/global'

const fetchHashtagPosts = async (page, limit) => {
    const db_data = await DataStore.query(Post)
    console.log('data... ',db_data);
    const posts = await storage.format_posts(db_data)
    return posts
}

const HashtagScreen = (props) => {

    return (
        <View style={style.hashtag_stream}>
            <Text>#{props.name}</Text>
            <Stream Article={HashtagPost} fetchArticles={fetchHashtagPosts} horizontal={true} />
        </View>
    );
}

export default HashtagScreen;