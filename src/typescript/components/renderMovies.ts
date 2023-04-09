import { favorMovies } from "../..";
import Elements from "./elements"

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
    const {container} = Elements;

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
        movieCard.innerHTML = `
        <div class="card shadow-sm" id="${id}">
                            <img
                                src="https://image.tmdb.org/t/p/original/${poster_path}"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="red"
                                fill=${checkHeart(id)}
                                width="50"
                                height="50"
                                class="bi bi-heart-fill position-absolute p-2"
                                viewBox="0 -2 18 22"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                            </svg>
                            <div class="card-body">
                                <p class="card-text truncate">
                                   ${overview}
                                </p>
                                <div
                                    class="
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                    "
                                >
                                    <small class="text-muted">${release_date}</small>
                                </div>
                            </div>
                        </div>`

                    })
        
}

export default renderMovies;