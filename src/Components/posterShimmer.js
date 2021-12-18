import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const PosterShimmer = () => {
  return (
    <View >
      <ShimmerPlaceHolder
        width={responsiveWidth(40)}
        height={responsiveHeight(30)}
        shimmerColors={['#1D1D1D', 'grey', '#1D1D1D']}
      />
    </View>
  )
}

export default PosterShimmer
