import React from 'react'
import { View, Text } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import PosterShimmer from '../../Components/posterShimmer'
import TextShimmer from '../../Components/textShimmer'

const Loading = () => {
  return (
    <>
      <TextShimmer suppliedHeight={responsiveHeight(4)} suppliedWidth={responsiveWidth(100)} />
      <View style={{ flexDirection: 'row', paddingLeft: responsiveWidth(4) }}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={{ marginHorizontal: responsiveWidth(2) }}>
            <View style={{ marginTop: responsiveHeight(1) }}>
              <PosterShimmer />
            </View><View style={{ marginTop: responsiveHeight(1) }}>
              <TextShimmer suppliedHeight={responsiveHeight(4)} suppliedWidth={responsiveWidth(40)} />
            </View><View style={{ marginTop: responsiveHeight(1) }}>
              <TextShimmer suppliedHeight={responsiveHeight(4)} suppliedWidth={responsiveWidth(40)} />
            </View>
          </View>
        ))}
      </View>
    </>
  )
}

export default Loading
