import Elements from "./elements";
import renderMovies from "./renderMovies";
import { movieService } from "../services/MovieService";
import { apiLinks } from "../services/apiLinks";


const initTrigggers = () => {

    const { btnTrigger, container, paginationBtn, searchInput, submitButton, form } = Elements;
    const { RATEDAPI, POPAPI, UPCOMING, SEARCHAPI } = apiLinks;

    let numberOfPage = 1;

    async function handleButtonClick(event: MouseEvent) {
        const target = event.target as Element;
        numberOfPage = 1;
        container.innerHTML = '';
        let movies;
        switch (target.id) {
            case 'top_rated':
                movies = await movieService.getMovies(RATEDAPI);
                break;
            case 'popular':
                movies = await movieService.getMovies(POPAPI);
                break;
            case 'upcoming':
                movies = await movieService.getMovies(UPCOMING);
                break;
            default:
                return;
        }
        renderMovies(movies)
    }
    btnTrigger.addEventListener('click', handleButtonClick)

    paginationBtn?.addEventListener('click', async () => {
        numberOfPage++
        const nextPageMovies = await movieService.paginatePage(numberOfPage)
        renderMovies(nextPageMovies)

    });

    const handleSearch = async (event: SubmitEvent | MouseEvent) => {
        event.preventDefault();
        numberOfPage = 1;
        const searchValue = searchInput.value;
        const searchMovies = await movieService.getMovies(SEARCHAPI + searchValue);
        container.innerHTML = ''
        renderMovies(searchMovies)
        searchInput.value = ''
    }

    submitButton.addEventListener('click', (event) => handleSearch(event));
    form.addEventListener('submit', handleSearch);

}

export default initTrigggers;