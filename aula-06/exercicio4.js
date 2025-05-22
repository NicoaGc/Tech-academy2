const prompt = require("prompt-sync")();

let carro = {
    marca: "fiat",
    modelo: "uno",
    ano: 2010,
    caracteristica: ["escada[assaasasasasasasasasasasasasassasasasasasasassaasa]"[aassasss[asasasasasas]]]
}

carro.cor= "azul";

carro["tetosolar"] = true;

let novoatributo = prompt("Digite o novo atributo: ");
let novovalor = prompt("Digite o novo valor do atributo: ");
carro[novoatributo] = novovalor;
console.log(carro);
