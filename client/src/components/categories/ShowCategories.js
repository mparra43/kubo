import React from 'react'
import {useSelector} from "react-redux";
import {CardFilm} from '../films/CardFilm';



export const ShowCategories = () => {

    const {showMovies} = useSelector(state => state.films);


    return (

        <div className="card-columns animate__animated animate__fadeIn">
            {showMovies ? showMovies.map((movie) =>
                <CardFilm
                    key={movie.id}
                    {...movie}
                />
            ) : console.log("espere")}
        </div>
    )
}