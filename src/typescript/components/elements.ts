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

export default {
    btnTrigger,
    movie,
    form,
    searchInput,
    submitButton,
    paginationBtn,
    releaseInfo,
    description,
    favoriteBtn,
    favoriteModal
} 