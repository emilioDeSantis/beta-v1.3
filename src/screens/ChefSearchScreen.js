import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import ChefComp from '../components/Chef'
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { StackActions, useNavigationState } from '@react-navigation/native';

import Stream from '../components/Stream'

const ChefSearchScreen = (props) => {

    const fetchChefs = async (page, limit) => {
        const data = await DataStore.query(Chef)
        console.log('data....',data);
        const chefs = data.map((chef) => {
            chef.key = chef.id
            return chef
        })
        return chefs
    }

    fetchChefs()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Stream Article={ChefComp} fetchArticles={fetchChefs} search={props.search} /> */}
        </View>
    );
}

export default ChefSearchScreen;