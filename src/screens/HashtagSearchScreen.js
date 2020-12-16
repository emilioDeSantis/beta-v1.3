import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import HashtagStream from '../components/HashtagStream'

import Stream from '../components/Stream'

const fetchHashtagStreams = (page, limit) => {
    let p = []
    for (var i = 0; i < limit; i++) {
        const k = page*100+i
        k = k.toString()
        p.push(
            {
                key: k,
                name: 'name'+k,
            }
        )
    }
    return p
}

const HashtagSearchScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Stream Article={HashtagStream} fetchArticles={fetchHashtagStreams} /> */}
        </View>
    );
}

export default HashtagSearchScreen;