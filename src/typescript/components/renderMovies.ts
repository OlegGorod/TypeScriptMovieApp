import { favorMovies } from "../..";
import Elements from "./elements"
import movieCardTemplate from "./movieCardTemplate";

interface MovieData {
    results: MovieObject[]
}
interface MovieObject {
    poster_path: string;
    release_date: string;
    overview: string;
    title: string;
    id: number;
}

const renderMovies = async (data: MovieData) => {
    const { container } = Elements;

    function checkHeart(id: number) {
        if (favorMovies.includes(String(id))) {
            return 'red'
        } else return '#ff000078'
    }

    data.results.map(item => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
        container.append(movieCard)
        const { id, overview, release_date, poster_path } = item
        movieCard.innerHTML = movieCardTemplate(id, poster_path, overview, release_date)
    })

}

export default renderMovies;