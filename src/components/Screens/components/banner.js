import React from 'react'
import { View, Text, Image } from 'react-native'

const Banner = ({ uri, imageStyle }) => {
  return (
    <>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + uri }}
        style={{ width: 150, height: 200, ...imageStyle }}
      />
    </>
  )
}

export default Banner
