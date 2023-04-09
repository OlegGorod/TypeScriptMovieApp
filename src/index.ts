import { addFavorite, addToFavoritesModal } from "./typescript/components/addMovies";
import renderMovies from "./typescript/components/renderMovies";
import initTrigggers from "./typescript/components/triggers";
import { movieService } from "./typescript/services/MovieService";
import { apiLinks } from "./typescript/services/apiLinks";


export let favorMovies: string[] = [];

export async function render(): Promise<void> {
    // TODO render your app here
    
    const { POPAPI } = apiLinks;
    const listOfMovies = await movieService.getMovies(POPAPI);
    const storedMovies = localStorage.getItem('favorMovies')
    if (storedMovies) {
        favorMovies = JSON.parse(storedMovies);
    }
    renderMovies(listOfMovies)
    addFavorite()
    addToFavoritesModal();
    initTrigggers();




}
