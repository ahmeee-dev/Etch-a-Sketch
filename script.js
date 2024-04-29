
let gridRows = 16
let gridColumns = 16
document.documentElement.style.setProperty('--gridRows', gridRows);
document.documentElement.style.setProperty('--gridColumns', gridColumns);
const gridContainer = document.querySelector('.gridContainer');

function createGrid() {
    // Rimuovi tutti gli elementi figlio dalla griglia
    gridContainer.innerHTML = '';

    // Crea nuovi elementi della griglia con le dimensioni aggiornate
    for (let i = 0; i < gridRows * gridColumns; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gridItem';
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', (event) => event.target.style.backgroundColor = "#FF0000");
    }
}

// Funzione per aggiornare la griglia con i nuovi valori di righe e colonne
function updateGrid() {
    // Chiedi all'utente il numero di quadrati per riga
    let userInput = window.prompt("Quanti quadrati per riga?");
    // Converte l'input in un numero intero
    let userInputNumber = parseInt(userInput);
    
    // Verifica se l'input è valido (un numero maggiore di 0)
    if (!isNaN(userInputNumber) && userInputNumber > 0) {
        // Aggiorna il numero di righe e colonne con il valore inserito dall'utente
        gridRows = userInputNumber;
        gridColumns = userInputNumber;
        
        // Aggiorna le variabili CSS con i nuovi valori
        document.documentElement.style.setProperty('--gridRows', gridRows);
        document.documentElement.style.setProperty('--gridColumns', gridColumns);

        // Ricrea la griglia con i nuovi valori
        createGrid();
    } else {
        // Messaggio di avviso se l'input non è valido
        alert("Inserisci un numero valido (>0).");
    }
}

// Aggiungi un evento al bottone per aggiornare la griglia
let button = document.querySelector('.diego');
button.addEventListener('click', updateGrid);

// Crea la griglia iniziale al caricamento della pagina
createGrid();
