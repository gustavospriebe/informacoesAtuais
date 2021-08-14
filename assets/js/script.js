const texto = document.querySelector(".container");
const data = new Date();

// Função para formatação de datas
const zeroAEsquerda = (num) => num >= 10 ? num : `0${num}`;

const dia = zeroAEsquerda(data.getDate());
const mes = data.getMonth();
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
const diaSemana = data.getDay();

// Função para transformar o getDay em Dias da Semana
function diaSemanaTexto(dia) {
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diaSemana[dia];
}

// Função para transformar o gerMonth em Meses
function mesTexto(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[mes];
}

console.log(dia, mesTexto(mes), ano, hora, min, seg,diaSemanaTexto(diaSemana))

texto.innerHTML = "";
texto.innerHTML = `<h2>${diaSemanaTexto(diaSemana)}, ${dia} de ${mesTexto(mes)} de ${ano}</h2>`;
texto.innerHTML += `<h1>${hora}:${min}:${seg}</h1>`;