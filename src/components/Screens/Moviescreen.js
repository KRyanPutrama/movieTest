import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getMovies, getMovies2 } from '../../redux/thunks/moviesThunk'
import Poster from './components/poster'
import Icon from 'react-native-vector-icons/Entypo'



const MovieScreen = (props) => {
  const { 
    movies_redux, movieState, movie_redux2, movieState2 
  } = useSelector(({ movie }) => ({ 
    movies_redux : movie.moviesData,
    movieState: movie.movieState,
    movie_redux2 : movie.moviesData2,
    movieState2: movie.movieState2,
  }), shallowEqual)
  
  const dispatch = useDispatch();

  useEffect(async() => {
    dispatch(getMovies())
    dispatch(getMovies2())
  }, [])


  return (
      <ScrollView style={styles.scrollView} >
        <View style={{width: '100%'}}>

          {/* first section */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20}}>Now Playing</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gold'}}>see all {'>>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{ width: '100%',  borderWidth: 1}}>
            {/* <View style={{ flexDirection: 'row' }}> */}
            {!!movies_redux && movies_redux.map((item, index) => (
                <Poster key={index} suppliedItem={item} onPress={() => props.navigation.navigate('Details', { data: item})} />
            ))}
            {/* </View> */}
          </ScrollView>
          
          {/* second section */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20}}>Now Playing</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gold'}}>see all {'>>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{ width: '100%',  borderWidth: 1}}>
            {/* <View style={{ flexDirection: 'row' }}> */}
            {!!movie_redux2 && movie_redux2.map((item, index) => (
                <Poster key={index} suppliedItem={item} onPress={() => props.navigation.navigate('Details', { data: item})} />
            ))}
            {/* </View> */}
          </ScrollView>
        </View>
      </ScrollView>
    )
  }

export default MovieScreen

const styles = StyleSheet.create({
  scrollView: {
    width: '100%', 
    height: '100%',
    // alignItems:'center', 
    // justifyContent:'center',
    backgroundColor: 'black'
  }
})