import {types} from '../types/types';

const initialState = {
    movies: [],
    showMovies:[],
    movie:{},
    categories: [],
    novelties:[],
    category:"",
    searchMovies:[],
    ratedMovies:[]
}

export const filmsReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.getFilmAll:
            return {
                ...state,
                movies: action.payload.data,
                showMovies:action.payload.data,
                searchMovies: action.payload.data,
                novelties: action.payload.data.filter((e)=> e.release.includes("Oct"))
            }

        case types.getCategoriesAll:
            return {
                ...state,
                categories: action.payload.data
            }

        case types.findFilms:
            return {
                ...state,
                movie: action.payload,
            }
        case types.filterCategories:
            console.log(action.payload)
            return {
                ...state,
                category: action.payload,
                showMovies:state.movies.filter((e)=>e.category.includes(action.payload))
            }

        case types.addFilms:
            return {
                ...state,
                ratedMovies: [...state.ratedMovies, action.payload]
            }

        case types.findName:
            return {
                ...state,
                searchMovies: state.movies.filter((e)=>e.title.includes(action.payload))
            }

        default:
            return state;

    }
}