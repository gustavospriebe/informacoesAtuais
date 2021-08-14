const texto = document.querySelector(".container");
const data = new Date();

// Função para formatação de datas
const zeroAEsquerda = (num) => (num >= 10 ? num : `0${num}`);

const dia = zeroAEsquerda(data.getDate());
const mes = data.getMonth();
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
const diaSemana = data.getDay();

// Função para transformar o getDay em Dias da Semana
function diaSemanaTexto(dia) {
    let diaSemanaTexto;

    switch (dia) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
    }
}

// Função para transformar o gerMonth em Meses
function mesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = "Janeiro";
            return mesTexto;
        case 1:
            mesTexto = "Fevereiro";
            return mesTexto;
        case 2:
            mesTexto = "Março";
            return mesTexto;
        case 3:
            mesTexto = "Abril";
            return mesTexto;
        case 4:
            mesTexto = "Maio";
            return mesTexto;
        case 5:
            mesTexto = "Junho";
            return mesTexto;
        case 6:
            mesTexto = "Julho";
            return mesTexto;
        case 7:
            mesTexto = "Agosto";
            return mesTexto;
        case 8:
            mesTexto = "Setembro";
            return mesTexto;
        case 9:
            mesTexto = "Outubro";
            return mesTexto;
        case 10:
            mesTexto = "Novembro";
            return mesTexto;
        case 11:
            mesTexto = "Dezembro";
            return mesTexto;
    }
}

texto.innerHTML = "";
texto.innerHTML = `<h2>${diaSemanaTexto(diaSemana)}, ${dia} de ${mesTexto(mes)} de ${ano}</h2>`;
texto.innerHTML += `<h1>${hora}:${min}:${seg}</h1>`;