import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/components/Routes/AppStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



export default function Navigation() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </Provider>
    )
}
