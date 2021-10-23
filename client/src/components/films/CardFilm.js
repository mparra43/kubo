import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {findFilms} from '../../actions/films';

export const CardFilm = (movie) => {

    const dispatch = useDispatch();

    const handleMovie= (data) => {
        dispatch(findFilms(data))
    }

    return (
                <div key={ movie.id } className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={movie.picture} className="card-img" alt={movie.title}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {movie.title}</h5>
                                <p className="card-text"> {movie.category}</p>
                                <p className="card-text">
                                    <small className="text-muted"> { movie.release } </small>
                                </p>

                                <Link to={ `/movie/${ movie.title }` }>

                                    <button
                                        className="btn btn-outline-info"
                                        onClick={()=>{handleMovie(movie)}}
                                    >
                                        Más...
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
    )
}