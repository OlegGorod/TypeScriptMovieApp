const Elements = {
    btnTrigger: document.querySelector('#button-wrapper') as HTMLDivElement,
    searchInput: document.querySelector("#search") as HTMLInputElement,
    submitButton: document.querySelector("#submit") as HTMLButtonElement,
    paginationBtn: document.querySelector('#load-more'),
    favoriteModal: document.querySelector('#favorite-movies') as HTMLDivElement,
    container: document?.getElementById('film-container') as HTMLDivElement,
    form: document.querySelector('form') as HTMLFormElement,
    randomTitle: document.querySelector('#random-movie-name') as HTMLDivElement,
    sectionRandom: document.querySelector('#random-movie') as HTMLDivElement,
    randomDescr: document.querySelector('#random-movie-description') as HTMLDivElement,
}

export default Elements
