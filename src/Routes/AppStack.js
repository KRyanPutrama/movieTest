import React from 'react'
import MovieScreen from '../Screens/Moviescreen'
import Details from '../Screens/Details'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Moviescreen" component={MovieScreen} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default AppStack

