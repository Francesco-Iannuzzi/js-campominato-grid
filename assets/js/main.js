/*

Consegna:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
- Di cosa ho bisogno per generare i numeri?
- Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
- Eventuali validazioni e controlli possiamo farli anche in un secondo momento.

*/

/*

Tools:
- const / let
- querySelector / getElementById
- addEvenetListener
- Math (.ceil .floor .random)
- innerHtml / createElement / insertAjacentHTML
- for / while
- classList
- if / else
- function

*/

//creare il markup con un container al quale inseriremo in un secondo momento la griglia
//creo un pulsante nel markup che tramite un selettore seleziono in js
//creare un eventListenere che richiami il nodo nella DOM in cui stampare la griglia
//stilizzo la cella che formerà la griglia nel css e creo un ciclo che stampi n volte la cella stilizzata
//nello stesso ciclo genero per ogni cella un numero che incrementa insieme alle celle
//stampo nelle celle il numenero generato
//seleziono la cella dalla DOM
//creo un ciclo per aggiungere o togliere (toggle) una classe stilizzata in css che colori la cella e loggo il numero corrispondente alla cella in console

