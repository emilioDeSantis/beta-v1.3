import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';
import style from '../style';

import ChefThumbnail from './ChefThumbnail'


function RecipeButton(props) {

    // console.log('post!!!... ',props);

    const navigation = useNavigation();

    const go_to_recipe = (post) => {
        console.log('post!!!... ',post);
        //fix db so that post links to recipe
        //get recipe
        //navigate to recipe paghe woth data
        //have the recpe page load its own recipe and just send the post
    }

    return (
        <TouchableOpacity 
            style= {style.recipe_button}
            onPress={() => go_to_recipe(props)}
        >
            <Image
                style = {{
                    height: '100%'
                }}
                source={{
                    uri: props.image,
                }}
            />
        </TouchableOpacity>
    );
}

function Post(props) {

    console.log('props... ', props);
    return (
        <View style={style.tri_post_row}>
            {props.forEach(post => {
                return (
                    <View style={style.tri_post}>
                        <Text style={{
                            position: 'absolute',
                            top: 50,
                            left: 140,
                        }}>
                            {props[0].chef.username}
                        </Text>
                        <RecipeButton {...props} image={props.image}/>
                        <ChefThumbnail chef={props.chef}/>
                    </View>
                )
            })}
        </View>
    )
}

export default Post;