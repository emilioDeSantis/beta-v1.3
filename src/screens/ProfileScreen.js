//Copyright 2020, Provecho, All rights reserved.

import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { useUser, useSetUser } from '../context'
import ChefScreen from './ChefScreen'

import AuthenticationScreen from './AuthenticationScreen'

function ProfileScreen() {
    user = useUser()


    if (user.isLoggedin) {
        return (
            <ChefScreen is_profile={true}/>
        );
    } else {
        return (
            <AuthenticationScreen></AuthenticationScreen>
        );
    }
}

export default ProfileScreen;