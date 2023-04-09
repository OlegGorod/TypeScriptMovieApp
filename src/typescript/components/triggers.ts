import Elements from "./elements";
import renderMovies from "./renderMovies";
import { movieService } from "../services/MovieService";
import { apiLinks } from "../services/apiLinks";


const initTrigggers = () => {

    const { btnTrigger, container, paginationBtn, searchInput, submitButton } = Elements;
    const { RATEDAPI, POPAPI, UPCOMING, SEARCHAPI } = apiLinks;
    
    let numberOfPage = 1;
    
    
    btnTrigger?.addEventListener('click', async (e) => {
        const target = e.target as Element;
        if (target && target.matches('#top_rated')) {
            numberOfPage = 1
            const ratedMovies = await movieService.getMovies(RATEDAPI);
            container.innerHTML = ''
            renderMovies(ratedMovies)
    
        };
        if (target && target.matches('#popular')) {
            numberOfPage = 1
            const popularMovies = await movieService.getMovies(POPAPI);
            container.innerHTML = ''
            renderMovies(popularMovies)
        };
        if (target && target.matches('#upcoming')) {
            numberOfPage = 1;
            const upcomingMovies = await movieService.getMovies(UPCOMING)
            container.innerHTML = ''
            renderMovies(upcomingMovies)
        };
    });
    
    paginationBtn?.addEventListener('click', async () => {
        numberOfPage++
        const nextPageMovies = await movieService.paginatePage(numberOfPage)
        renderMovies(nextPageMovies)
    
    });
    
    const handleSearch = async () => {
        const searchValue = searchInput.value;
        const searchMovies = await movieService.getMovies(SEARCHAPI + searchValue);
        container.innerHTML = ''
        renderMovies(searchMovies)
        searchInput.value = ''
    }
    
    submitButton.addEventListener("click", (e) => {
        handleSearch();
    });
}

export default initTrigggers;