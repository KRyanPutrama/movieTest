import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IconStar from 'react-native-vector-icons/Entypo'
import { genres } from '../../../Utils/constant'


const Poster = ({ suppliedItem, onPress }) => {
  // console.log(suppliedItem)
  return (
    <TouchableOpacity style={{ margin: 4, borderWidth: 1 }} onPress={onPress}>
      <View style={{ position: 'absolute', zIndex: 2, left: 5, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'gold', }}>{`${suppliedItem.vote_average}/10`}</Text>
        <IconStar name='star' color={'gold'} size={15} />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500" + suppliedItem.poster_path }}
          style={{ width: 150, height: 200, borderRadius: 20 }}
        />
        <View style={{ position: 'relative', width: 150, justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {suppliedItem.genre_ids.map((item) => genres.map((i, index) => item === i.id ? (
              <View key={index} style={{ borderWidth: 1, borderColor: i.color, borderRadius: 50, padding: 2, paddingHorizontal: 5, margin: 2 }}>
                <Text style={{ color: i.color }}>{i.val}</Text>
              </View>
            ) : null))}
          </View>
          <Text style={{ color: 'white', fontSize: 14 }}>{suppliedItem.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Poster
