function comparaNumeros(num1, num2){
    const primeiraF = criaPrimeiraF(num1, num2);
    const segundaF = criaSegundaF(num1, num2);
    return `${primeiraF} ${segundaF}`;
}

function criaPrimeiraF(num1, num2){
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais='nao';
    }
    return `os numeros ${num1} e ${num2} ${saoIguais} sao iguais`
}

function criaSegundaF(num1,num2){
    const soma = num1 + num2;
    const comparadez = soma >10;
    const comparavinte = soma>20;
    let resultadodez = 'menor';
    let resultadovinte = 'menor';
    
    if (comparadez){
        resultadodez = 'maior';

    }
    if(comparavinte){
        resultadovinte = 'maior';
    }

    return `sua soma eh ${soma}, que eh ${resultadodez} que 10 e ${resultadovinte} que eh 20`

}

console.log(comparaNumeros(20,20) ) //20 e 20 são valores de exemplos