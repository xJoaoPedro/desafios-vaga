// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

let palavraVerificada = "Arara";
let contador = 0;

for (let i = 0; i  < palavraVerificada.length; i++) {
    if (palavraVerificada[i] == 'a' || palavraVerificada[i] == 'A') { contador ++ }
}

console.log(`Quantidade de letras a na palavra ${palavraVerificada}: ${contador}`);