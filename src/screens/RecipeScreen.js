import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InstructionsBar from '../navigation/InstructionsBar';
import ChefThumbnail from '../components/ChefThumbnail';

function RecipeScreen() {

const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>recipe</Text>
            <ChefThumbnail></ChefThumbnail>
            <Button 
                title='back'
                onPress={() => navigation.goBack()}
            />
            <InstructionsBar ></InstructionsBar>
        </View>
    );
}

export default RecipeScreen;