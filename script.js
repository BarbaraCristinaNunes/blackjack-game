async function getCards(){
    let api = "C:/Users/barba/OneDrive/Documentos/GitHub/blackjack-game/api";
    let request = new XMLHttpRequest();
    request.open('GET', api);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const cheap = request.response;
        console.log(cheap);
    }
}
getCards();