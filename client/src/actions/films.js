import {fetchWithoutToken,} from '../helpers/fetch';
import {types} from '../types/types';


export const getFilmAll= () => {
    return async (dispatch) => {
        const resp = await fetchWithoutToken('films/all/movies');
        const data = await resp.json();
        try {
            dispatch({type: types.getFilmAll, payload: data})
        } catch (e) {
            console.log(data)
        }
    }
}

export const getCategoriesAll= () => {
    return async (dispatch) => {
        const resp = await fetchWithoutToken('films/category');
        const data = await resp.json();
        try {
            dispatch({type: types.getCategoriesAll, payload: data})
        } catch (e) {
            console.log(data)
        }
    }
}


export const findFilms = (data) => {
    return function (dispatch) {
        dispatch({type: types.findFilms, payload: data});
    }
}
export const filterCategories = (data) => {
    return function (dispatch) {
        dispatch({type: types.filterCategories, payload: data});
    }
}
export const filterNovelties = () => {
    return function (dispatch) {
        dispatch({type: types.filterNovelties});
    }
}

export const addFilms = (film) => {
    return async (dispatch) => {
        const resp = await fetchWithoutToken('films/category', film, 'POST');
        const data = await resp.json();
        try {
            dispatch({type: types.getCategoriesAll, payload: data})
        } catch (e) {
            console.log(data)
        }
    }
}

export const getMovieByName = (film) => {
    console.log(film)
    return function (dispatch) {
        dispatch({type: types.addFilms, payload: film});
    }
}




