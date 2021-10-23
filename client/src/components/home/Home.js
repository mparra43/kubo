import React, {useEffect} from 'react';
import {Navbar} from '../nav/Navbar'
import {Filter} from '../filter/Filter'
import {ShowCategories} from '../categories/ShowCategories'
import {useDispatch} from "react-redux";

import {getFilmAll, getCategoriesAll} from "../../actions/films";

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesAll());
        dispatch(getFilmAll());
    }, [dispatch])

    return (
        <div className="home">
            <div>
                <Navbar/>
            </div>
            <div>
                <Filter/>
            </div>
            <div className="container mt-2">
                <ShowCategories/>
            </div>
        </div>
    );
};