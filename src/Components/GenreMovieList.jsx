import React, {useEffect, useRef, useState} from 'react';
import MovieList from "./MovieList.jsx";
import Loader from "./Loader.jsx";
import GenresList from "../Constant/GenresList.jsx";

function GenreMovieList({ onMovieSelect }) {
    const [visibleGenres, setVisibleGenres] = useState(4);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleGenres((prevVisibleGenres) => prevVisibleGenres + 4);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, []);

    return (
        <div>
            {GenresList.genere.slice(0, visibleGenres).map((item, index) => (
                <div key={index} className="p-8 px-8 md:px-16">
                    <h2 className='text-white text-[20px] font-bold'>
                        {item.name}
                    </h2>
                    <MovieList genreId={item.id} onMovieSelect={onMovieSelect} index_={index} />
                </div>
            ))}
            {visibleGenres < GenresList.genere.length && (
                <div ref={loadMoreRef}>
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default GenreMovieList;
