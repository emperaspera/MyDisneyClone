import React, {useEffect, useRef, useState} from 'react';
import GlobalApi from "../Services/GlobalApi.jsx";
import MovieCard from "./MovieCard.jsx";
import HrMovieCard from "./HrMovieCard.jsx";
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";

const screenWidth = window.innerWidth;

function MovieList({genreId, onMovieSelect, index_}) {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const elementRef = useRef();

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth;
    };

    return (
        <div className="relative">
            <IoChevronBackOutline
                className={`hidden md:block text-white text-[50px] absolute ${index_%3===0?'mt-[70px]':'mt-[150px]'} mx-8 cursor-pointer p-2 z-10`}
                onClick={() => sliderLeft(elementRef.current)}
            />
            <IoChevronForwardOutline
                className={`hidden md:block text-white text-[50px] absolute mx-8 mt-[150px] cursor-pointer p-2 z-10 right-0 ${index_%3===0?'mt-[70px]':'mt-[150px]'} top-0 z-10`}
                onClick={() => sliderRight(elementRef.current)}
            />
            <div className="flex gap-8 overflow-x-auto scrollbar-hide pt-4 px-3 pb-4 scroll-smooth" ref={elementRef}>
                {movieList.map((movie) => (
                    <>
                        {index_ % 3 === 0 ? <HrMovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect}/> :
                            <MovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect}/>}

                    </>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
