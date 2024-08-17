import axios from 'axios';

const movieBaseUrl="https://api.themoviedb.org/3"

const api_key='a76ee67773a785b3dfdaeb8677c22ce0'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a76ee67773a785b3dfdaeb8677c22ce0'
//https://api.themoviedb.org/3/movie/550?api_key=a76ee67773a785b3dfdaeb8677c22ce0
const getTrendingVideos=axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key)

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id);
export default{
    getTrendingVideos,
    getMovieByGenreId
}