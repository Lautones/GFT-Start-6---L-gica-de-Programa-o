/* Desafio 1 - Classificador de Nivel de Herói */

//Informações do Grande Herói
let nome = "GFT"; 
let XP = 99999;
let nivel;

if (XP <= 1000) {
    nivel = "Ferro"; 
} else if (XP <= 2000) {
    nivel = "Bronze";
} else if (XP <= 5000) {
    nivel = "Prata";
} else if (XP <= 7000) {
    nivel = "Ouro";
} else if (XP <= 8000) {
    nivel = "Platina";
} else if (XP <= 9000) {
    nivel = "Ascendente";
} else if (XP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome **${nome}** está no nível **${nivel}**`);
// Fim do Desafio

if (XP>9000){
    //Informações do mortal que está à procura de um Grão Mestre para guiá-lo
    let nomeDiscipulo = "Lauton";
    let idadeDiscipulo = 23;

    console.log(`Exaltado ${nivel}, meu nome daionista é ${nomeDiscipulo}. Estou há eras (${idadeDiscipulo} anos) vagando por esse Mundo à procura de um Mestre. Poderia, por ventura, me guiar nessa jornada?`);
}

