import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getMovies, getMovies2 } from '../redux/thunks/moviesThunk'
import Poster from '../Components/poster'
import Icon from 'react-native-vector-icons/Entypo'
import PosterShimmer from '../Components/posterShimmer'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TextShimmer from '../Components/textShimmer'
import Loading from './components/loading'
import Banner from '../Components/banner'
import BannerCarousel from '../Components/bannerCarousel'
import { navigate } from '../Utils/navigateRef'



const MovieScreen = (props) => {
  const {
    movies_redux, movieState, movie_redux2, movieState2
  } = useSelector(({ movie }) => ({
    movies_redux: movie.moviesData,
    movieState: movie.movieState,
    movie_redux2: movie.moviesData2,
    movieState2: movie.movieState2,
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getMovies())
    dispatch(getMovies2())
  }, [])

  const isSuccess = movieState === 'success' && movieState2 === 'success'

  return (
    <ScrollView style={styles.scrollView} >
      <View style={{ width: '100%' }}>
        <BannerCarousel data={movies_redux} loading={!isSuccess} />

        {/* first section */}
        {isSuccess && (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Now Playing</Text>
              <TouchableOpacity>
                <Text style={{ color: 'gold' }}>see all {'>>'}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal style={{ width: '100%', paddingLeft: responsiveWidth(4) }}>
              {/* <View style={{ flexDirection: 'row' }}> */}
              {!!movies_redux && movies_redux.map((item, index) => (
                <Poster key={index} suppliedItem={item} onPress={() => navigate('Details', { data: item })} />
              ))}
              {/* </View> */}
            </ScrollView>
          </>
        )}

        {/* second section */}
        {isSuccess && (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Now Playing</Text>
              <TouchableOpacity>
                <Text style={{ color: 'gold' }}>see all {'>>'}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal style={{ width: '100%' }}>
              {/* <View style={{ flexDirection: 'row' }}> */}
              {!!movie_redux2 && movie_redux2.map((item, index) => (
                <Poster key={index} suppliedItem={item} onPress={() => navigate('Details', { data: item })} />
              ))}
              {/* </View> */}
            </ScrollView>
          </>
        )}

        {movieState2 !== 'success' && (
          <>
            <View style={{ marginBottom: responsiveHeight(2) }}>
              <Loading />
            </View>
            <View>
              <Loading />
            </View>
          </>
        )}
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
    backgroundColor: '#1D1D1D'
  }
})