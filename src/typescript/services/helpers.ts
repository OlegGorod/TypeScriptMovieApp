const APIKEY = 'api_key=04c35731a5ee918f014970082a0088b1';
const RATEDAPI = 'https://api.themoviedb.org/3/movie/top_rated?' + APIKEY + '&page=';
const POPAPI = 'https://api.themoviedb.org/3/movie/popular?' + APIKEY + '&page=';
const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?' + APIKEY + '&page=';

export default {APIKEY,
    RATEDAPI,
    POPAPI,
    UPCOMING
}