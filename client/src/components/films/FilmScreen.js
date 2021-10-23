import React from 'react';
import {useSelector} from "react-redux";
import {Navbar} from "../nav/Navbar";
import {Rating} from "../rating/Rating";
import './styles/filmScreen.css'

export const FilmScreen = ({history}) => {

    const {movie} = useSelector(state => state.films);


    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <div className="row mt-5">
                    <div className="col-4">
                        <img
                            src={movie.picture}
                            alt={movie.title}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    </div>

                    <div className="col-8 animate__animated animate__fadeIn">
                        <h3> {movie.title} </h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b> Estreno: </b> {movie.release}</li>
                            <li className="list-group-item"><b> Duración: </b> {movie.duration} </li>
                            <li className="list-group-item"><b> Género: </b> {movie.category} </li>
                        </ul>

                        <h5> Descripción </h5>
                        <p> {movie.description} </p>

                        <a href={movie.trailer}>Trailer</a>

                    </div>
                </div>
                <Rating/>
            </div>
        </>

    )
}
