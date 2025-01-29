// Creiamo una costante per selezionare il contenitore HTML in cui inseriremo le cards

const cardsContainer = document.getElementById('card_container');



// Definiamo l'endpoint dell'API da cui recuperare i dati delle cards
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Facciamo una richiesta HTTP usando Axios per recuperare i dati dall'endpoint
axios.get(endpoint)

// Se la richiesta ha successo, gestiamo la risposta
.then(response => {

    // Otteniamo i dati dalla risposta dell'API

    
    
    const datiCards = response.data;

    // Cicliamo su tutti gli elementi dell'array di dati ricevuto
    for (let i = 0; i < datiCards.length; i++) {

        // Estraiamo le proprietà dell'oggetto corrente usando la destrutturazione
        const cardProperties = datiCards[i];
        const { id, title, date, url } = cardProperties;

        // Creiamo l'HTML per una singola card e lo aggiungiamo al contenitore
        cardsContainer.innerHTML += ` 
        
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

})

// Se c'è un errore nella richiesta, lo gestiamo con un messaggio di errore nel console
.catch(error => {
    console.error('Errore nel fetch dei dati:', error);
});





