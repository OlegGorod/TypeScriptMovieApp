const Elements = {
    btnTrigger: document.querySelector('#button-wrapper') as HTMLDivElement,
    searchInput: document.querySelector("#search") as HTMLInputElement,
    submitButton: document.querySelector("#submit") as HTMLButtonElement,
    paginationBtn: document.querySelector('#load-more'),
    favoriteModal: document.querySelector('#favorite-movies') as HTMLDivElement,
    container: document?.getElementById('film-container') as HTMLDivElement
}

export default Elements
