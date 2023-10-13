import { useState } from "react";


export function calcularPontuacao(respostas) {
  const pontuacao = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0
  };
  const total = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0
  };
  respostas.forEach((resposta) => {

    total[resposta.categoria]++;


    pontuacao[resposta.categoria] += parseInt(resposta.value, 10)
  });





  for (let categoria in pontuacao) {


    if (total[categoria] < 6) pontuacao[categoria] += (6 - total[categoria]);


    pontuacao[categoria] = (pontuacao[categoria] / 12)*100

  }

  const pontuacaoArray = [];

  // Transforma as propriedades em um array de objetos com chave e valor
  for (let categoria in pontuacao) {
      pontuacaoArray.push({ categoria, valor: pontuacao[categoria] });
  }

  // Ordena o array em ordem decrescente com base no valor
  pontuacaoArray.sort((a, b) => b.valor - a.valor);


  return (pontuacaoArray);
}

export function getDados(responses) {
  
  responses.forEach()
}