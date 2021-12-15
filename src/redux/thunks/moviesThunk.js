import axios from "axios"
import { GET_MOVIES, GET_MOVIES_DETAILS, GET_SIMILAR_MOVIES } from "../reducer/movies";

export function getMovies(param1, param2) {


    return async (dispatch, getState) => {
        dispatch({ type: `${GET_MOVIES}_LOADING` })
        try {
            const resMovies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1');
            dispatch({
                type: `${GET_MOVIES}_SUCCESS`,
                movies: resMovies.data.results
            })
            return { message: 'success', movies: resMovies.data.results };
        }
        catch (err) {
            return { message: err.message, codeStatus: 400 };
        }
    }
}

export function getMovies2(param1, param2) {


    return async (dispatch, getState) => {
        dispatch({ type: `${GET_MOVIES}_2_LOADING` })
        try {
            const resMovies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=2');
            dispatch({
                type: `${GET_MOVIES}_2_SUCCESS`,
                movies: resMovies.data.results
            })
            return { message: 'success', movies: resMovies.data.results };
        }
        catch (err) {
            return { message: err.message, codeStatus: 400 };
        }
    }
}

export function getMovieDetail(param1, param2) {

    return async (dispatch, getState) => {
        dispatch({ type: `${GET_MOVIES_DETAILS}_LOADING` })
        try {
            const resMovies = await axios.get(`https://api.themoviedb.org/3/movie/${param1}?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US`);
            dispatch({
                type: `${GET_MOVIES_DETAILS}_SUCCESS`,
                movies: resMovies.data
            })
            return { message: 'success', movies: resMovies.data.results };
        }
        catch (err) {
            return { message: err.message, codeStatus: 400 };
        }
    }
}

export function getSimilarMovie(param1, param2) {

    return async (dispatch, getState) => {
        dispatch({ type: `${GET_SIMILAR_MOVIES}_LOADING` })
        try {
            const resMovies = await axios.get(`https://api.themoviedb.org/3/movie/${param1}/similar?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1`);
            dispatch({
                type: `${GET_SIMILAR_MOVIES}_SUCCESS`,
                movies: resMovies.data.results
            })
            return { message: 'success', movies: resMovies.data.results };
        }
        catch (err) {
            return { message: err.message, codeStatus: 400 };
        }
    }
}