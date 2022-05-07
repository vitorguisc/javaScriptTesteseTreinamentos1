const lista = [
    {
        nome: 'arroz',
        valor: 15,
    },
    {
        nome: 'feijao',
        valor: 12,
    },
    {
        nome: 'frango',
        valor: 10,
    },
];

const saldo = 100;

function calculasaldo(saldo, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index +1);
        console.log({prev});
        console.log({current});
        return prev-current.valor;
    }, saldo);
}

console.log(calculasaldo(saldo,lista));
