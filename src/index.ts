import renderMovies from "./typescript/components/renderMovies";
import { movieService } from "./typescript/services/MovieService";
import { apiLinks } from "./typescript/services/apiLinks";



const btnTrigger = document.querySelector('#button-wrapper') as HTMLDivElement;
const searchInput = document.querySelector("#search") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const paginationBtn = document.querySelector('#load-more');
const favoriteModal = document.querySelector('#favorite-movies') as HTMLDivElement;
const container = document?.getElementById('film-container') as HTMLDivElement;
export let favorMovies: string[] = [];


const { RATEDAPI, POPAPI, UPCOMING, SEARCHAPI } = apiLinks;

export async function render(): Promise<void> {

    // TODO render your app here

    const listOfMovies = await movieService.getMovies(POPAPI);
    let numberOfPage = 1;
    const storedMovies = localStorage.getItem('favorMovies')
    if (storedMovies) {
        favorMovies = JSON.parse(storedMovies);
    }
    console.log(favorMovies)
   renderMovies(listOfMovies)



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
        console.log(searchMovies)
        container.innerHTML = ''
        renderMovies(searchMovies)
        searchInput.value = ''
    }

    submitButton.addEventListener("click", (e) => {
        handleSearch();
    });

    addFavorite();
    function addFavorite() {
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
                    removeMovie(cardId, heart);
                    return /* !IMPORTANT */
                }
                addMovie(cardId, clonedCardElement, heart);
                clonedCardElement.addEventListener('click', () => {
                    removeMovie(cardId, heart);
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

    function addToFavoritesModal() {
        const cardElement = document.querySelector('.col-12.p-2') as HTMLDivElement;
        console.log(cardElement.children[0])
    }
    addToFavoritesModal();

    function removeMovie(movieId: string, heart: Element) {
        const index = favorMovies.indexOf(movieId)
        if (index !== -1) {
            const clonedCardElement = document.getElementById(`cloned-card-${movieId}`);
            heart.setAttribute('fill', '#ff000078');
            if (clonedCardElement) {
                clonedCardElement.remove();
            }
            favorMovies.splice(index, 1);
            localStorage.setItem('favorMovies', JSON.stringify(favorMovies))
        }
    }


}
