
import * as React from 'react'
import { CommonActions, NavigationContainerRef } from '@react-navigation/native'

import { NavigationScreenArgsType } from '@/Containers/_protoype'



export const navigationRef = React.createRef()

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

export function navigateBack(callback) {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack()
  } else if (callback) callback()
}
