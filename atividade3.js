// 3) Observe o trecho de código abaixo: 
// int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const indice = 12;
let soma = 0;

for (let k = 1; k < indice; k++) {
    soma += k;
}

console.log(soma) // aqui printa o valor final de soma, que é 66.