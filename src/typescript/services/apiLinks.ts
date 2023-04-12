

export const APIKEY = process.env.APIKEY;

export const apiLinks = {
    RATEDAPI: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`,
    POPAPI: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`,
    UPCOMING: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`,
    SEARCHAPI: `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`,
    IDAPI: `https://api.themoviedb.org/3/movie/`,
    IMGPATH: 'https://image.tmdb.org/t/p/original/'

};




