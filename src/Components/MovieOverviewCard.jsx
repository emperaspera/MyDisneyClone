import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieOverviewCard({ movie }) {

    // Function to generate star rating based on movie.vote_average
    const renderStars = (rating) => {
        const filledStars = Math.round(rating); // Using the vote_average directly for 10 stars
        return (
            <div className="flex">
                {[...Array(10)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-6 h-6 ${index < filledStars ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.117 3.421a1 1 0 00.95.69h3.708c.97 0 1.371 1.24.588 1.81l-3.008 2.185a1 1 0 00-.364 1.118l1.117 3.421c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.008 2.185c-.785.57-1.84-.197-1.54-1.118l1.117-3.421a1 1 0 00-.364-1.118L3.197 8.848c-.783-.57-.382-1.81.588-1.81h3.708a1 1 0 00.95-.69l1.117-3.421z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col md:flex-row p-6 rounded-lg">
            {/* Left side: Image */}
            <div className="flex-shrink-0">
                <img
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt="Movie image"
                    className="rounded-lg w-full md:w-[400px] h-auto border-4 border-gray-400"
                />
                {/* Star rating below the image */}
                <div className="mt-4">
                    {renderStars(movie.vote_average)}
                    <span className="text-gray-300 ml-2">{movie.vote_average}/10</span>
                </div>
            </div>

            {/* Right side: Text and Video */}
            <div className="flex flex-col justify-start mt-6 md:mt-0 md:ml-6 w-full">
                <h1 className="text-2xl font-bold text-white mb-4">{movie.original_title}</h1>
                <p className="text-white mb-6">{movie.overview}</p>

                {/* Video embed below the text */}
                <div className="w-auto h-[305px] my-0">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Movie Trailer"
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <button className="mt-[30px] bg-white relative w-100">
                    <a className="text-black" href="#">More Info</a>
                </button>
            </div>
        </div>
    );
}

export default MovieOverviewCard;
