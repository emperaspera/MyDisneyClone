import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header.jsx";
import Slider from "./Components/Slider.jsx";
import Production from "./Components/Production.jsx";
import GenreMovieList from "./Components/GenreMovieList.jsx";
import Modal from './Components/Modal.jsx';
import MovieOverviewCard from './Components/MovieOverviewCard.jsx';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="">
            <Header />
            <Slider />
            <Production />
            <GenreMovieList onMovieSelect={handleMovieSelect} />
            {selectedMovie && (
                <Modal onClose={handleCloseModal}>
                    <MovieOverviewCard movie={selectedMovie} />
                </Modal>
            )}
        </div>
    );
}

export default App;
