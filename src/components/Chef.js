import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';

import ChefThumbnail from './ChefThumbnail'

function Chef(props) {
    return (
        <View style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{props.username}</Text>
            <ChefThumbnail chef={props}/>
        </View>
    );
}

export default Chef;