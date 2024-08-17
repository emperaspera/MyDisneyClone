import React, {useEffect, useRef, useState} from 'react';
import GlobalApi from "../Services/GlobalApi.jsx";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider(props) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then((res) => {
            // res.forEach((video) => {});
            setMovieList(res.data.results);
            console.log(res);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 125;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 125;
    }
    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
                           onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0'
                            onClick={() => sliderRight(elementRef.current)}/>
            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide
            scroll-smooth" ref={elementRef}>
                {movieList.map((movie, index) => (
                    <img src={IMAGE_BASE_URL + movie.backdrop_path} className='min-w-full md:h-[310px]
                object-cover object-left-top mr-5 rounded-md
                hover:border-[4px] border-gray-300 transition-all
                duration-100 ease-in' alt={movie.title}/>
                ))}
            </div>
        </div>
    );
}

export default Slider;