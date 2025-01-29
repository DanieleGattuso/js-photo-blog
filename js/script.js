// Selezioniamo il contenitore delle card dove verranno inserite le immagini dinamicamente
const cardsContainer = document.getElementById('card_container');

// Selezioniamo gli elementi del pop-up
const chiuderePopUp = document.getElementById('chiudere_pop_up'); // Il pulsante per chiudere il pop-up
const immaginePopUp = document.getElementById('immagine_pop_up'); // L'elemento in cui verrà inserita l'immagine nel pop-up
const popUp = document.getElementById('popUp'); // Il contenitore principale del pop-up
// Definiamo l'URL dell'API da cui recuperare le immagini
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Effettuiamo una richiesta HTTP con Axios per ottenere le immagini
axios.get(endpoint)
    .then(response => {
        // Salviamo i dati ricevuti dall'API in una variabile
        const datiCards = response.data;

        // Variabile per costruire dinamicamente l'HTML delle card
        let cardsHTML = "";

        // Usiamo un ciclo `for` per iterare su tutti gli elementi restituiti dall'API
        for (let i = 0; i < datiCards.length; i++) {
            // Estrarre i dati della card corrente dall'array
            let { title, date, url } = datiCards[i];

            //  Creiamo il codice HTML per una singola card e lo aggiungiamo alla variabile `cardsHTML`
            cardsHTML += `
                <div class="cards">
                    <div class="card_inner">
                        <div class="image_container">
                            <img src="${url}" alt="${title}" class="image_size">
                            <img src="./img/pin.svg" alt="" class="pin">
                        </div>
                        <figcaption>${date}</figcaption>
                        <h2>${title}</h2>
                    </div>
                </div>`;
        }

        // Inseriamo tutte le card nel contenitore HTML
        cardsContainer.innerHTML = cardsHTML;

        // Selezioniamo tutte le immagini caricate dinamicamente
        const allImage = document.querySelectorAll('.image_size');

        // Usiamo un ciclo `for` per assegnare l'evento di `click` a ogni immagine
        for (let i = 0; i < allImage.length; i++) {
            allImage[i].addEventListener('click', function () {
                // Quando un'immagine viene cliccata, il suo `src` viene copiato nel pop-up
                immaginePopUp.innerHTML = `<img src="${this.src}" alt="Popup Image" class="popup-image">`;

                // Rimuoviamo la classe `hidden` per mostrare il pop-up
                popUp.classList.remove('hidden');
            });
        }
    })
    // Gestione degli errori: se la richiesta all'API fallisce, mostriamo un messaggio nella console
    .catch(error => {
        console.error('Errore nel fetch dei dati:', error);
    });

// Aggiungiamo un evento di click al pulsante di chiusura del pop-up
chiuderePopUp.addEventListener('click', () => {
    //  Aggiungiamo la classe `hidden` per nascondere il pop-up quando viene cliccato "Chiudi"
    popUp.classList.add('hidden');
});





