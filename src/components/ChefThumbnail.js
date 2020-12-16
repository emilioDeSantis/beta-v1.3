import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';
import style from '../style';

function ChefThumbnail(props) {

    const navigation = useNavigation();
    const chef = props.chef

    return (
        <View>
            <TouchableOpacity 
                style= {style.chef_thumbnail}
                onPress={() => navigation.navigate('chef',{
                    chef
                })}
            >
                <Image
                    style = {{
                        height: '100%',
                        borderRadius: 1000,
                    }}
                    source={{
                        uri: chef.image,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default ChefThumbnail