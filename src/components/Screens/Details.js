import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getMovieDetail, getSimilarMovie } from '../../redux/thunks/moviesThunk'
import Banner from './components/banner'
import Poster from './components/poster'

const Details = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const {
        movieDetail,
        movieDetailState,
        similarMovie,
        similarMovieState,
    } = useSelector(({ movie }) => ({
        movieDetail: movie.movieDetails,
        movieDetailState: movie.movieDetailsState,
        similarMovie: movie.similarMovies,
        similarMovieState: movie.similarMoviesState,
    }), shallowEqual)

    const { params } = route
    // console.log(movieDetail)
    useEffect(() => {
        dispatch(getMovieDetail(params.data.id))
        dispatch(getSimilarMovie(params.data.id))
    }, [])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ width: '100%', height: 200 }}>
                <Banner
                    uri={params.data.backdrop_path}
                    imageStyle={{ width: '100%', height: '100%' }}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 23, fontWeight: '700' }}>Synopsis</Text>
                <View style={{ backgroundColor: '#242424', marginVertical: 10, padding: 15 }}>
                    <Text style={{ color: '#FFFFFF', opacity: 0.6, lineHeight: 20, fontSize: 14 }}>{movieDetail.overview}</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ color: '#FFFFFF' }}>Production Companies :</Text>
                    {!!movieDetail && movieDetail?.production_companies?.slice(0, 3).map((item, index) => (
                        <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>{` ${item.name}${index !== movieDetail?.production_companies?.length - 1 ? ',' : ''}`}</Text>
                    ))}
                    <Text style={{ color: 'gold' }}> more</Text>
                </View>
            </View>

            <View style={{ borderTopWidth: 0.5, borderColor: '#FFFFFF', opacity: 0.5, marginVertical: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Now Playing</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'gold' }}>see all {'>>'}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal style={{ width: '100%' }}>
                {/* <View style={{ flexDirection: 'row' }}> */}
                {!!similarMovie && similarMovie.map((item, index) => (
                    <Poster key={index} suppliedItem={item} />
                ))}
                {/* </View> */}
            </ScrollView>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({})
