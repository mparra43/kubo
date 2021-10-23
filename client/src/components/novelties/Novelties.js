import React from 'react';
import {useSelector} from "react-redux";
import {CardFilm} from "../films/CardFilm";
import {Navbar} from "../nav/Navbar";


export const Novelties = () => {
    const {novelties} = useSelector(state => state.films);



    return (
        <div>
            <Navbar/>
            <div className="container mt-2">
                <h1>Ultimas Novedades </h1>
                <hr/>

                <div className="row">


                    <div className="col-7">

                        {novelties ? novelties.map((movie) =>
                            <CardFilm
                                key={movie.id}
                                {...movie}
                            />
                        ) : console.log("espere")}

                    </div>

                </div>

            </div>
        </div>
    )
}
