import React, {useEffect} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
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

import AuthenticationScreen from './AuthenticationScreen'

import * as storage from '../functions/storage'
import * as global from '../functions/global'
import BackButton from '../components/BackButton'
import NotificationsScreen from './NotificationsScreen'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'
import ChefTabBar from '../components/ChefTabBar'
import Stream from '../components/Stream'
import TriPost from '../components/TriPost'

import { v4 as uuidv4 } from 'uuid';

const Settings = ({ navigation }) => {
    return (
        <View style={{ top: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>settings</Text> 
            <BackButton/>
            <AuthenticationScreen/>
        </View>
    )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const All = (props) => {

    const fetchPosts = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts}/>
        </View>
    );
}


const Originals = (props) => {

    const fetchPosts = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts}/>
        </View>
    );
}

const Stash = (props) => {

    const fetchPosts = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts}/>
        </View>
    );
}

const ChefTabs = () => (
    <Tab.Navigator tabBar={props => <ChefTabBar {...props} />} initialRouteName={'all'}>
        <Tab.Screen name="all">
            {(props) => <All {...props} />}
        </Tab.Screen>
        <Tab.Screen name="originals">
            {(props) => <Originals {...props} />}
        </Tab.Screen>
        <Tab.Screen name="stash">
            {(props) => <Stash {...props} />}
        </Tab.Screen>
    </Tab.Navigator>
)

const ChefPannel = ({ chef_props , navigation }) => {

    const user = useUser()

    const follow = async (followingID) => {
        await DataStore.save(
            new Follow({
                followingID,
                followerID: user.user_id
            })
        )
    }

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <BackButton></BackButton>
                <Text>{chef_props.chef.username}</Text> 
                {chef_props.is_profile && <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => navigation.navigate('notifications')}
                >
                    <Text>notifications</Text>
                </TouchableOpacity> }
                <Text>profile pic</Text>
                {chef_props.is_profile && <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => navigation.navigate('settings')}
                >
                    <Text>edit profile</Text>
                </TouchableOpacity> }
                {!chef_props.is_profile && <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={async() => {
                        await follow(chef_props.chef.id)
                    }}
                >
                    <Text>follow</Text>
                </TouchableOpacity> }
                <Text>{chef_props.chef.n_followers} followers</Text>
                <Text>{chef_props.chef.n_following} following</Text>
                <Text>{chef_props.chef.n_remakes} remakes</Text>
                <Text>{chef_props.chef.biography}</Text>
                </View>
            <ChefTabs/>
        </>
    );
}

function ChefScreen(props) {

    const route = useRoute();

    const chef = route.params

    const chef_props = props

    console.log('props1...',chef);

    const navigation = useNavigation();

    if (props.is_profile) {
        return (
            <Stack.Navigator headerMode ={'none'} screenProps={'test'}>
                <Stack.Screen name="chef pannel">
                    {(props) => <ChefPannel {...props} chef_props={chef_props}/>}
                </Stack.Screen>
                <Stack.Screen name="settings" component={Settings} />
                <Stack.Screen name="notifications" component={NotificationsScreen} />
            </Stack.Navigator>
        );
    } else {
        return (
            <ChefPannel chef_props={chef}/>
        )
    }
}

export default ChefScreen;

