import { favorMovies } from "../..";
import { APIKEY, apiLinks } from "../services/apiLinks";
import { movieService } from "../services/MovieService";
import Elements from "./elements"
import movieCardTemplate from "./movieCardTemplate";

const { favoriteModal, container } = Elements;

export function addFavorite() {
    document.querySelector('.col-12.p-2')!.innerHTML = '';
    container.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const heart = target.closest('.bi-heart-fill')
        if (heart) {
            const cardElement = target.closest('.card.shadow-sm') as HTMLDivElement;
            const cardId: string = cardElement!.getAttribute('id') as string;
            const cardIndex = favorMovies.indexOf(cardId)
            const clonedCardElement = cardElement.cloneNode(true) as HTMLDivElement;
            if (cardIndex !== -1) {
                removeMovie(cardId);
                return /* !IMPORTANT */
            }
            addMovie(cardId, clonedCardElement, heart);
            clonedCardElement.addEventListener('click', () => {
                removeMovie(cardId);
            });
        }
    })
}

function addMovie(movieId: string, clonedCardElement: HTMLDivElement, heart: Element) {
    if (!favorMovies.includes(movieId)) {
        heart.setAttribute('fill', 'red');
        clonedCardElement.id = `cloned-card-${movieId}`;
        clonedCardElement.children[1].setAttribute('fill', 'red');
        favoriteModal.firstElementChild?.appendChild(clonedCardElement);
        favorMovies.push(movieId);
        localStorage.setItem('favorMovies', JSON.stringify(favorMovies));
    }
}

export function addToFavoritesModal() {
    const { IDAPI } = apiLinks;
    favorMovies.forEach(async movieId => {
        const movie = await movieService.getMovies(`${IDAPI}${movieId}?${APIKEY}`);
        const {id, poster_path, overview, release_date} = movie;
        const movieCard = document.createElement('div');
        movieCard.innerHTML = movieCardTemplate(id, poster_path, overview, release_date)
        const movieCardElement = movieCard.firstElementChild as HTMLDivElement;
        movieCardElement.id = `cloned-card-${id}`;
        const heart = movieCardElement.children[1];
        heart.addEventListener('click', () => {
            removeMovie(String(id))
        })
        favoriteModal.firstElementChild?.appendChild(movieCard)
    })

}

function removeMovie(movieId: string) {
    const index = favorMovies.indexOf(movieId)
    if (index !== -1) {
        const clonedCardElement = document.getElementById(`cloned-card-${movieId}`);
        document.getElementById(movieId)?.children[1].setAttribute('fill', '#ff000078')
        if (clonedCardElement) {
            clonedCardElement.remove();
        }
        favorMovies.splice(index, 1);
        localStorage.setItem('favorMovies', JSON.stringify(favorMovies))
    }
}