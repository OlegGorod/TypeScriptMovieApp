
export const APIKEY = 'api_key=04c35731a5ee918f014970082a0088b1'
let movieId;

export const apiLinks = {
    RATEDAPI: `https://api.themoviedb.org/3/movie/top_rated?${APIKEY}&page=`,
    POPAPI: `https://api.themoviedb.org/3/movie/popular?${APIKEY}&page=`,
    UPCOMING: `https://api.themoviedb.org/3/movie/upcoming?${APIKEY}&page=`,
    SEARCHAPI: `https://api.themoviedb.org/3/search/movie?&${APIKEY}&query=`,
    IDAPI: `https://api.themoviedb.org/3/movie/`
};




