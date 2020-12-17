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

const LikeButton = (props) => {
    return(
        <View style={style.like_button_container}>
            <TouchableOpacity 
                style= {style.like_button}
                onPress={() => alert('like')}
            >
                <Text>like</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => alert('like')}
            >
                <Text style={style.number_text}>422</Text>
            </TouchableOpacity> 
        </View>
    )
}

const CommentButton = (props) => {
    return(
        <View style={style.comment_button_container}>
            <TouchableOpacity 
                style= {style.comment_button}
                onPress={() => alert('comment')}
            >
                <Text>comment</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => alert('comment')}
            >
                <Text style={style.number_text}>142</Text>
            </TouchableOpacity> 
        </View>
    )
}

const TipButton = (props) => {
    return(
        <View style={style.tip_button_container}>
            <TouchableOpacity 
                style= {style.tip_button}
                onPress={() => alert('tip')}
            >
                <Text>tip</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => alert('tip')}
            >
                <Text style={style.number_text}>127</Text>
            </TouchableOpacity> 
        </View>
    )
}

function Post(props) {

    console.log('props... ', props);
    return (
        <View style={style.post}>
            <Text style={{
                position: 'absolute',
                top: 50,
                left: 140,
            }}>
                {props.chef.username}
            </Text>
            <RecipeButton {...props} image={props.image}/>
            <ChefThumbnail chef={props.chef}/>
            <LikeButton/>
            <CommentButton/>
            <TipButton/>
        </View>
    );
}

export default Post;