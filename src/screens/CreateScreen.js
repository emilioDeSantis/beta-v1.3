import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow, Hashtag } from '../models'
import { Todo } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import * as storage from '../functions/storage'
import AuthenticationScreen from './AuthenticationScreen'
import ImageButton from '../components/ImageButton'
import ImagePreview from '../components/ImagePreview'
import style from '../style'

import { useUser, useSetUser } from '../context'
import TopScreen from './TopScreen';

function CreateScreen() {

    const [uri, setUri] = useState(null)
    const [isOriginal, setIsOriginal] = useState(true)
    const user = useUser()
    console.log(user);
    const [title, setTitle] = useState('')
    const [serves, setServes] = useState('')
    const [cook_time, setCook_time] = useState('')
    const [caption, setCaption] = useState('')
    const [tip, setTip] = useState('')
    const [hashtags, setHashtags] = useState([])



    const onSubmit = async () => {

//still ussue with hashtags having an epmty elemt in array

        //backgroound uplaod
        try {
            var chef = await DataStore.query(Chef, user.user_id)
            console.log('chef... ',chef);
            const key = await storage.upload(uri)
            // const key = 'testkey'
            //if it fails delete image
            //possile issue with connecting them/general warning im ignroing
            //remove duplacate hastags
            if(isOriginal){
                console.log('hastoogs..... ',hashtags);
                let hashtags_input = hashtags.map(item => {
                    if (item != '') {
                        return item
                    }
                })

                const predicate = c => c.or(
                    c => {
                        hashtags_input.forEach(name => {
                            c = c.name("eq", name)
                        })
                    }
                )

                const existing_hashtags = await DataStore.query(Hashtag, predicate);
                const hashtag_filter = existing_hashtags.map((item) => {
                    return item.name
                })

                const new_hashtags = hashtags_input.filter(function(obj) { return hashtag_filter.indexOf(obj) == -1; })
                console.log('hashtags inout... ', hashtags_input);

                await new_hashtags.forEach( async (name) => {
                    await DataStore.save(
                        new Hashtag({
                            name
                        })
                    )
                })

                const post = await DataStore.save(
                    new Post({
                        title,
                        caption,
                        image: key,
                        type: PostType.ORIGINAL,
                        chefID: chef.id,
                        chef,
                        hashtags: hashtags_input,
                    })
                )
                const recipe = await DataStore.save(
                    new Recipe({
                        title,
                        image: key,
                        serves: parseInt(serves),
                        cook_time: parseInt(cook_time),
                        //igredients
                        procedure: [{step: 'uyf'},{step: 'khli'}],
                        chefID: chef.id,
                        postID: post.id,
                        chef,
                    })
                )
                //is this working?
                await DataStore.save(
                    Post.copyOf(post, updated => {
                        updated.recipe = recipe
                    })
                )
            } else {
                const recipe = await DataStore.query(Recipe, '//recipeid')// add real reicpe id
                const post = await DataStore.query(Post, recipe.postID)
                const remake = await DataStore.save(
                    new Post({
                        title,
                        caption,
                        image: key,
                        type: PostType.REMAKE,
                        chefID: chef.id,
                        chef,
                        recipe,
                    })
                )
                await DataStore.save(
                    new Tip({
                        text: tip,
                        chefID: chef.id,
                        recipeID: recipe.id,
                        postID: post.id,
                        chef,
                        recipe,
                        post,
                        remake,
                    })
                )
            }
        } catch (error) {
            console.log('error!!!... ', error);
        }
    }

    if (user.isLoggedin) {
        return (
            <ScrollView contentContainerStyle={{ top:100, alignItems: 'center', justifyContent: 'center' }}>
                <ImageButton isCamera={true} setUri={setUri} is_profile_picture={false}></ImageButton>
                <ImageButton isCamera={false} setUri={setUri} is_profile_picture={false}></ImageButton>
                <ImagePreview uri={uri}></ImagePreview>
                <CreateButton function={setIsOriginal} input={true} title={'original'}></CreateButton>
                <CreateButton function={setIsOriginal} input={false} title={'remake'}></CreateButton>
                {/* add search for recipes and add stash view */}
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setTitle(text)}
                    placeholder={'title'}
                    value={title}
                />
                {isOriginal && <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setServes(text)}
                    placeholder={'serves'}
                    keyboardType={'numeric'}
                    value={serves}
                />}
                {isOriginal && <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setCook_time(text)}
                    placeholder={'cook time'}
                    keyboardType={'numeric'}
                    value={cook_time}
                />}
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setCaption(text)}
                    placeholder={'caption'}
                    value={caption}
                />
                {isOriginal && <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setHashtags(toArray(text))}
                    placeholder={'hashtags'}
                    value={toString(hashtags)}
                />}
                {!isOriginal && <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setTip(text)}
                    placeholder={'tip'}
                    value={tip}
                />}
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => onSubmit()}
                    // onPress={() => DataStore.clear()}
                >
                    <Text>upload</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    } else {
        return (
            <AuthenticationScreen></AuthenticationScreen>
        )
    }
}

function CreateButton(props) {
    return(
        <TouchableOpacity
            style={{
                height: 100,
                width: 200,
                borderRadius: 50,
                backgroundColor: '#ffe488'
            }}
            onPress={() => props.function(props.input)}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

const toArray = (text) => {
    text = text.replace('  ', ' ')
    text = text.replace(/#/g, '')
    const array = text.split(' ')
    console.log(array);
    return array
}

const toString = (array) => {
    if (array.length == 0) array = ['']
    console.log('huuustagfds... ',array);
    let add_space = false
    let string = ''
    const last_item = array.pop()
    array.forEach(element => {
        if (add_space) {
            string += ' '
        }
        string += '#' + element
        add_space = true
    })
    if (add_space) {
        string += ' '
    }
    string += last_item
    array.push(last_item)
    return string
}


export default CreateScreen;