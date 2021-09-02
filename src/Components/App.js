import './App.css';
import ConfirmationPage from './ConfirmationPage';
import Header from './Header';
import MainPage from './MainPage';
import Seats from './Seats';
import Sessions from './Sessions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies`)
        .then(res => {
            setMoviesList([...res.data])
            console.log(res);
        });
    },[])

    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage moviesList={moviesList}/>
                    </Route>
                    <Route exact path="/sessoes/:idFilme">
                        <Sessions /> 
                    </Route>
                    <Route exact path="/assentos/:idSessao">
                        <Seats />
                    </Route>
                    <Route exact path="/confirmation">
                        <ConfirmationPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

