import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import HashtagPost from './HashtagPost'

import Stream from '../components/Stream'

const fetchPosts = (page, limit) => {
    let p = []
    for (var i = 0; i < limit; i++) {
        const k = page*100+i
        k = k.toString()
        p.push(
            {
                key: k,
                title: 'title'+k,
            }
        )
    }
    return p
}

const HashtagScreen = (props) => {

    return (
        <View style={{ width: 100, flex: 1, alignItems: 'center'}}>
            <Text>{props.name}</Text>
            <Stream Article={HashtagPost} fetchArticles={fetchPosts} horizontal={true} />
        </View>
    );
}

export default HashtagScreen;