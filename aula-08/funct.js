dado = 1;
a = 0
b = 2;
c = 3;

function teste() {
    console.log("Entrou na função");
}
function asas() {
    dado = a - b * a * c;
}
console.log("Passou aqui primeiro"+dado);
teste();
console.log("Passou aqui primeiro"+dado);
asas();