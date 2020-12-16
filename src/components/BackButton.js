import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BackButton() {

    const navigation = useNavigation();

    return (
        <Button 
            title='back'
            onPress={() => navigation.goBack()}
        />
    )
}

export default BackButton;