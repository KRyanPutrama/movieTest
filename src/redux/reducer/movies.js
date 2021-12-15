const initialState = {
    moviesData : [],
    moviesData2:[],
    movieDetails: {},
    similarMovies: [],

    movieState: '',
    movieState2: '',
    movieDetailsState: '',
    similarMoviesState: '',
}

export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_DETAILS = 'GET_MOVIES_DETAILS'
export const GET_SIMILAR_MOVIES = 'GET_SIMILAR_MOVIES'

const movies = (state = initialState, action) => {
    switch(action.type) {
        case `${GET_MOVIES}_LOADING`: 
            return {
                ...state,
                moviesData : [],
                movieState : 'loading',
            };
        case `${GET_MOVIES}_SUCCESS`: 
            return {
                ...state,
                moviesData : action.movies,
                movieState : 'success',
            };
        case `${GET_MOVIES}_2_LOADING`: 
            return {
                ...state,
                moviesData2 : [],
                movieState2 : 'loading',
            };
        case `${GET_MOVIES}_2_SUCCESS`: 
            return {
                ...state,
                moviesData2 : action.movies,
                movieState2 : 'success',
            };
        case `${GET_MOVIES_DETAILS}_LOADING`: 
            return {
                ...state,
                movieDetails : {},
                movieDetailsState : 'loading',
            };
        case `${GET_MOVIES_DETAILS}_SUCCESS`: 
            return {
                ...state,
                movieDetails : action.movies,
                movieDetailsState : 'success',
            };
        case `${GET_MOVIES_DETAILS}_RESET`: 
            return {
                ...state,
                movieDetails : {},
                movieDetailsState : '',
            };
        case `${GET_SIMILAR_MOVIES}_LOADING`: 
            return {
                ...state,
                similarMovies : [],
                similarMoviesState : 'loading',
            };
        case `${GET_SIMILAR_MOVIES}_SUCCESS`: 
            return {
                ...state,
                similarMovies : action.movies,
                similarMoviesState : 'success',
            };
        case `${GET_SIMILAR_MOVIES}_RESET`: 
            return {
                ...state,
                similarMovies : [],
                similarMoviesState : '',
            };

        default:
            return state
    }
}

export default movies;