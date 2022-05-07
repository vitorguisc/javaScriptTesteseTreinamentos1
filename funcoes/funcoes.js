const alunos = [
    {
        nome: 'vitor',
        nota: 2,
        turma: '1A',
    },
    {
        nome: 'vitoria',
        nota: 9,
        turma: '1A',
    },
    {
        nome: 'vitoriazinha',
        nota: 6,
        turma: '1B',
    }
]

function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i =0; i<arr.length; i++){
       const  {nota, nome} = arr[i];
        if(nota>=media){
           aprovados.push (nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 3));