function faixaEtaria(idade) {
    if (idade < 18) {
        return "jovem";

    } else if (idade < 65) {
        return "adulto";
    } else {
        return "idoso ";
    }

}
const retornoDaFuncao = (faixaEtaria(6));
console.log(retornoDaFuncao);

