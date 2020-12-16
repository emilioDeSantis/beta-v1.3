import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import BackButton from '../components/BackButton'
import NotificationsScreen from './NotificationsScreen'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'

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


const All = () => {
    return (
        <View style={style.container}>
            <Text>all</Text>
        </View>
    )
}

const Originals = () => {
    return (
        <Text>originals</Text>
    )
}

const Stash = () => {
    return (
        <Text>stash</Text>
    )
}

const ChefTabs = () => (
    <Tab.Navigator tabBarOptions={{style: { position: 'absolute', marginBottom: '70%' }}} initialRouteName={'all'}>
        <Tab.Screen name="all" component={All} />
        <Tab.Screen name="originals" component={Originals} />
        <Tab.Screen name="stash" component={Stash} />
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

