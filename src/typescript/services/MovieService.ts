class MovieService {

    lastURL!: string;

    getResource = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }
        return await response.json();
    }

    getMovies = async (url: string) => {
        this.lastURL = url;
        const response = await this.getResource(this.lastURL);
        return response
    }

    paginatePage = async (numberOfPage: number) => {
        if (this.lastURL.includes('page=')) {
            const regex = /page=\d+/;
            const newURL = this.lastURL.replace(regex, 'page=');
            const nextPageOfMovies = await this.getMovies(newURL + numberOfPage);
            return nextPageOfMovies;
        } else {
            this.lastURL += '&page=';

            const nextPageOfMovies = await this.getMovies(this.lastURL + numberOfPage);
            return nextPageOfMovies
        }
    }
}

export const movieService = new MovieService();