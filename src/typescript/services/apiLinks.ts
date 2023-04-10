
export const APIKEY = 'api_key=04c35731a5ee918f014970082a0088b1'

export const apiLinks = {
    RATEDAPI: `https://api.themoviedb.org/3/movie/top_rated?${APIKEY}`,
    POPAPI: `https://api.themoviedb.org/3/movie/popular?${APIKEY}`,
    UPCOMING: `https://api.themoviedb.org/3/movie/upcoming?${APIKEY}`,
    SEARCHAPI: `https://api.themoviedb.org/3/search/movie?&${APIKEY}&query=`,
    IDAPI: `https://api.themoviedb.org/3/movie/`,
    IMGPATH: 'https://image.tmdb.org/t/p/original/'

};




