import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)


const TextShimmer = ({ suppliedWidth, suppliedHeight, style }) => {
  return (
    <View>
      <ShimmerPlaceHolder
        width={suppliedWidth}
        height={suppliedHeight}
        shimmerColors={['#1D1D1D', 'grey', '#1D1D1D']}
        style={style}
      />
    </View>
  )
}

export default TextShimmer
