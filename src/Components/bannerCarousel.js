import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Carousel from 'react-native-snap-carousel';
import { navigate } from '../Utils/navigateRef';
import Banner from './banner';


const BannerCarousel = ({ data, loading }) => {

  const ref = useRef(null)
  const [dataIndex, setDataIndex] = useState(0)

  const renderItem = ({ item }) => {
    return (
      <Banner
        uri={item.backdrop_path}
        // imageStyle={{ width: responsiveWidth(100), height: 600 }}
        title={item.title}
        duration={item.runtime}
        vote_average={item.vote_average}
        loading={loading}
        onPress={() => navigate('Details', { data: item })}
      />
    )
  }

  return (
    <View style={{ width: '100%', height: 200, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
      <Carousel
        ref={ref}
        data={data}
        renderItem={renderItem}
        sliderWidth={responsiveWidth(100)}
        itemWidth={responsiveWidth(100)}
        loop
        autoplay
        autoplayInterval={10000}
        onSnapToItem={(index) => setDataIndex(index)}
      />
    </View>
  )
}

export default BannerCarousel
