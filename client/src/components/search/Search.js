import React from 'react';
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CardFilm} from '../films/CardFilm';
import {getMovieByName} from "../../actions/films";
import {Navbar} from "../nav/Navbar";


export const Search = ({history}) => {
    const {searchMovies} = useSelector(state => state.films);
    const dispatch = useDispatch();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const {searchText} = formValues;


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        dispatch(getMovieByName(searchText))
    }

    return (
        <div>
            <Navbar/>
            <div className="container mt-2">

                <h1>Search Screen</h1>
                <hr/>

                <div className="row">

                    <div className="col-5">
                        <h4> Search Form </h4>
                        <hr/>

                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Encuentra tu películas favorita"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />

                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                            >
                                Buscar...
                            </button>
                        </form>


                    </div>


                    <div className="col-7">

                        <h4> Results </h4>
                        <hr/>


                        {
                            (q !== '' && searchMovies.length === 0)
                            &&
                            <div className="alert alert-danger">
                                No hay una películas con {q}
                            </div>
                        }

                        {
                            searchMovies.map(movie => (
                                <CardFilm
                                    key={movie.id}
                                    {...movie}
                                />
                            ))
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}
