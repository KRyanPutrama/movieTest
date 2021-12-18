import React from 'react'
import { View, Text, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import IconStar from 'react-native-vector-icons/Entypo'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import TextShimmer from './textShimmer'

const Banner = ({ uri, imageStyle, title, vote_average, duration, loading, onPress, onPressBack }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ padding: 0, margin: 0 }}>
        <ImageBackground
          resizeMode='contain'
          source={{ uri: "https://image.tmdb.org/t/p/w500" + uri }}
          style={{ width: '100%', height: '100%', ...imageStyle }}
        >
          <LinearGradient colors={["transparent", "#1D1D1D"]} locations={[0.4, 1.2]} style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }} />
        </ImageBackground>
        {onPressBack ? (
          <TouchableOpacity onPress={onPressBack}
            style={{ position: 'absolute', borderWidth: 1, borderColor: 'gold', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 20, backgroundColor: '#1D1D1D', left: 5, top: 5 }}
          >
            <Text style={{ color: 'gold', fontSize: responsiveFontSize(2) }}>{`< go back`}</Text>
          </TouchableOpacity>
        ) : null}
        <View style={{ position: 'absolute', bottom: 4, marginLeft: responsiveWidth(2) }}>
          {!loading ? (
            <>
              <View style={{ zIndex: 2, left: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'gold', }}>{`${Math.ceil(vote_average)}/10`}</Text>
                <IconStar name='star' color={'gold'} size={15} />
              </View>
              {duration ? (
                <>
                  <Text style={{ color: 'gold' }}>{`Movie duration : ${duration}`}</Text>
                </>
              ) : null}
              <Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>
            </>
          ) : (
            <>
              <TextShimmer />
              <TextShimmer />
              <TextShimmer />
            </>
          )}

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Banner
