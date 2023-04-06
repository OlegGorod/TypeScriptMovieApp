
class MovieService {
    APIKEY = 'api_key=04c35731a5ee918f014970082a0088b1';
    APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&" + this.APIKEY;
    IMGPATH = 'https://image.tmdb.org/t/p/w500';
    IMGHIGHPATH = 'https://image.tmdb.org/t/p/w1280'
    SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&" + this.APIKEY + "&query=";
    RATEDAPI = 'https://api.themoviedb.org/3/movie/top_rated?' + this.APIKEY + '&query=';
    POPAPI = 'https://api.themoviedb.org/3/movie/popular?' + this.APIKEY + '&query=';
    COMMINGAPI = 'https://api.themoviedb.org/3/movie/upcoming?' + this.APIKEY + '&query=';
    PAGINAPI = 'https://api.themoviedb.org/3/movie/popular?' + this.APIKEY + '&page=';

    getResource = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }
        return await response.json();
    }

    getMovies = async (url: string = this.APIURL) => {
        const response = await this.getResource(url);
        return response
    }

     showRated = async () => {
        console.log(await this.getResource(this.RATEDAPI))
       return await this.getResource(this.RATEDAPI);
    }

     showPopular = async () => {
        return await this.getResource(this.POPAPI);
    }

     showComming = async () => {
        return await this.getResource(this.COMMINGAPI);
    }

    paginatePage = async (numberOfPage : number) => {
        return await this.getResource(this.PAGINAPI + numberOfPage)
    }


}

export const movieService = new MovieService();