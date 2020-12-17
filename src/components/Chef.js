import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';

import style from '../style';

import ChefThumbnail from './ChefThumbnail'

function Chef(props) {
    console.log('chef... ',props);
    return (
        <View style={style.chef}>
            <ChefThumbnail chef={props}/>
            <Text>{props.username}</Text>
        </View>
    );
}

export default Chef;