
function determinarFaixaEtaria(idade) {
    if (idade <= 18) {
        return 'jovem';
    } else if (idade < 66) {
        return 'adulto';
    } else {
        return 'idoso';
    }
}


function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos de idade e sou um(a) ${pessoa.profissao}.`);
}
const pessoa1 = {
    nome: "Joao",
    idade: 18,
    profissao: "Médico"
};
apresentar(pessoa1);
