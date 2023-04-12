import Elements from "./elements"
import movieCardTemplate from "./movieCardTemplate";
import { apiLinks } from "../services/apiLinks";

interface MovieData {
    results: MovieObject[]
}
interface MovieObject {
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    overview: string;
    title: string;
    id: number;
}

const renderMovies = async (data: MovieData) => {
    const { container } = Elements;
    let filteredPoster: MovieObject[] = [];
    filteredPoster = data.results.filter((item) => item.poster_path);
    generateRandomPoster(filteredPoster)
    filteredPoster.map(item => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
        container.append(movieCard)
        const { id, overview, release_date, poster_path } = item
        movieCard.innerHTML = movieCardTemplate(id, poster_path, overview, release_date)
    })

}

function generateRandomPoster(arrayOfMovies: MovieObject[]) {
    const { randomTitle, sectionRandom, randomDescr } = Elements;
    const { IMGPATH } = apiLinks;
    let randomIdx: number = Math.floor(Math.random() * arrayOfMovies.length);
    sectionRandom.style.background = `url(${IMGPATH + arrayOfMovies[randomIdx].backdrop_path}) 0 0/cover no-repeat`;
    randomDescr.textContent = `${arrayOfMovies[randomIdx].overview}`;
    randomTitle.textContent = `${arrayOfMovies[randomIdx].title}`
}

export default renderMovies;