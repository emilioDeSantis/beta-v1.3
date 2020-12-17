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
            style= {style.tri_recipe_button}
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

function TriPost(props) {

    console.log('propsgff... ', props);
    return (
        <View style={style.tri_post_row}>
            {props.tri_post.map(post => {
                return (
                    <View style={style.tri_post}>
                        <RecipeButton {...post} image={post.image}/>
                    </View>
                )
            })}
        </View>
    )
}

export default TriPost;