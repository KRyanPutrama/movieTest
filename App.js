import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/Routes/AppStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { navigationRef } from './src/Utils/navigateRef';



export default function Navigation() {

    const routeNameRef = useRef()

    return (
        <Provider store={store}>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name
                }}
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current
                    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name
                    routeNameRef.current = currentRouteName
                }}
            >
                <AppStack />
            </NavigationContainer>
        </Provider>
    )
}
