let fibo1 = 0;
let fibo2 = 1;
const numeroVerificado = 6765; // numero que será verificado se pertence à sequência

while (fibo2 != numeroVerificado && fibo2 <= numeroVerificado) {
    fibo1 = fibo1 + fibo2;
    fibo2 = fibo1 + fibo2;
}

if (fibo1 == numeroVerificado || fibo2 == numeroVerificado) {
    console.log(`:) O número verificado pertence a sequência fibonacci: ${numeroVerificado}`);
} else {
    console.log(`:( O número verificado NÃO pertence a sequência fibonacci: ${numeroVerificado}`);
}