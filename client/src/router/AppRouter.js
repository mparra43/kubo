import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {Home} from '../components/home/Home';
import {Novelties} from '../components/novelties/Novelties';
import {FilmScreen} from '../components/films/FilmScreen';
import {LoginScreen} from '../components/auth/LoginScreen';
import {startChecking} from '../actions/auth';
import {Search} from '../components/search/Search';
import {PublicRoute} from './PublicRoute';


export const AppRouter = () => {


    const {checking, id} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/home"
                        component={Home}
                        isAuthenticated={!!id}

                    />
                    <PublicRoute
                        exact
                        path="/Novedades"
                        component={Novelties}
                        isAuthenticated={!!id}

                    />
                    <PublicRoute
                        exact
                        path="/Search"
                        component={Search}
                        isAuthenticated={!!id}

                    />
                    <PublicRoute
                        exact
                        path="/movie/:movie"
                        component={FilmScreen}
                        isAuthenticated={!!id}
                    />

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!id}
                    />


                    <Redirect to="/home"/>
                </Switch>
            </div>
        </Router>
    )
}
