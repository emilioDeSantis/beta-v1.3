import  React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function SearchBar(props) {

    const navigation = useNavigation();

    return (
        <View style={{ top: 0, height: 110, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => props.setSearch(text)}
                onSubmitEditing={() => props.on_return()}
                placeholder={'search'}
                value={props.search}
            />
            <TouchableOpacity
                style={{
                    height: 40,
                    width: 60,
                    borderRadius: 50,
                    backgroundColor: '#3b9'
                }}
                onPress={() => navigation.navigate('top bar')}
            >
                <Text>back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

//make search in vcomponts so i can reuse for create etc.