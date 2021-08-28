const container = document.querySelector('.container');
const h2 = document.createElement('h2');
const h1 = document.createElement('h1');

function time() {
    let data = new Date();

    function getDate() {
        let date = data.toLocaleString('pt-BR',{weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'});
        return date;
    }
    
    function getHours() {
        let hour = data.toLocaleString('pt-BR', {hour:'2-digit', minute: '2-digit', second: '2-digit'});
        return hour;
    }

    container.innerHTML = `<h2>${getDate()}</h2>`;
    container.innerHTML += `<h1>${getHours()}</h1>`;
}

setInterval(time ,1000);