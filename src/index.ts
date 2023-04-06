import { movieService } from "./typescript/services/MovieService";



const btnTrigger = document.querySelector('#button-wrapper') as HTMLDivElement;
const movie = document.querySelectorAll('.card.shadow-sm') as NodeListOf<HTMLDivElement>;

const form = document.querySelector('form') as HTMLFormElement;
const searchInput = document.querySelector("#search") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const paginationBtn = document.querySelector('#load-more');
const releaseInfo = document.querySelectorAll('.text-muted');
const description = document.querySelectorAll('.card-text');
const favoriteBtn = Array.from(document.querySelectorAll('.bi-heart-fill')) as SVGSVGElement[];
const favoriteModal = document.querySelector('#favorite-movies') as HTMLDivElement;

console.log(movie)
export async function render(): Promise<void> {
    // TODO render your app here

    const listOfMovies = await movieService.getMovies();
    let arrayOfMovies = listOfMovies;
    let numberOfPage = 1;
    console.log(arrayOfMovies)


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
        console.log(data)
        data.results.map(item => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2')
            document?.getElementById('film-container')?.append(movieCard)
            const { id, overview, release_date, poster_path, title } = item
            movieCard.innerHTML = `
            <div class="card shadow-sm">
                                <img
                                    src="https://image.tmdb.org/t/p/original/${poster_path}"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="red"
                                    fill="#ff000078"
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
    renderMovies(arrayOfMovies)


    btnTrigger?.addEventListener('click', async (e) => {
        const target = e.target as Element;
        if (target && target.matches('#top_rated')) {
            const ratedMovies = await movieService.showRated();
            renderMovies(ratedMovies)
        };
        if (target && target.matches('#popular')) {
            const popularMovies = await movieService.showPopular();
            renderMovies(popularMovies)
        };
        if (target && target.matches('#upcoming')) {
            const upcomingMovies = await movieService.showComming()
            renderMovies(upcomingMovies)
        };
    });

    paginationBtn?.addEventListener('click', async () => {
        numberOfPage++;
        const nextPageMovies = await movieService.paginatePage(numberOfPage)
        console.log(nextPageMovies)
        renderMovies(nextPageMovies)

    });

}
