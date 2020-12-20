import React, {useEffect} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useNavigationState, useNavigationBuilder } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { useUser, useSetUser } from '../context'


import * as storage from '../functions/storage'
import * as global from '../functions/global'
import BackButton from '../components/BackButton'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'
import LikeTabBar from '../components/LikeTabBar'
import Stream from '../components/Stream'
import TriPost from '../components/TriPost'

import { v4 as uuidv4 } from 'uuid';


const Tab = createBottomTabNavigator();

const LikeComp = () => {
    return (
        <View style={{height: 200, width: 300,}}>
            <Text>like</Text>
        </View>
    )
}

const CommentComp = () => {
    
}

const TipComp = () => {
    
}


const LikeTab = (props) => {

    const fetchLikes = async (page, limit) => {
        const db_data = await DataStore.query(Chef)
        console.log('data... ',db_data);
        const chefs = await storage.format_chefs(db_data)
        return chefs
    }

    return (
        <View style={style.feed_container}>
            {/* <Stream Article={LikeComp} fetchArticles={fetchLikes}/> */}

        </View>
    );
}


const CommentTab = (props) => {

    //rerplace posts wiht comments

    const fetchComments = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            {/* <Stream Article={CommentComp} fetchArticles={fetchComments}/> */}
        </View>
    );
}

const TipTab = (props) => {

    //rerplace posts wiht tips

    const fetchTips = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            {/* <Stream Article={TipComp} fetchArticles={fetchTips}/> */}
        </View>
    );
}

const LikeModal = (props) => {
    const navigation = useNavigation()

    const route = useRoute();

    const route_name = route.params
    return (
        <View style={style.like_modal_container}>
            <TouchableOpacity
                key = 'back to post'
                accessibilityRole="button"
                onPress={() => navigation.goBack()}
                style={style.like_back_button}
            >
            </TouchableOpacity>
            <View style={style.like_modal}>
                <Tab.Navigator tabBar={props => <LikeTabBar {...props} />} initialRouteName={route_name}>
                    <Tab.Screen name="likes">
                        {(props) => <LikeTab {...props} />}
                    </Tab.Screen>
                    <Tab.Screen name="comments">
                        {(props) => <CommentTab {...props} />}
                    </Tab.Screen>
                    <Tab.Screen name="tips">
                        {(props) => <TipTab {...props} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </View>
    )
}


export default LikeModal;

