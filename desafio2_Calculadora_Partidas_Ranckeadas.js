/* Desafio 2 - Calculadora de Partidas Rankeadas */

let vitorias = 90;
let derrotas = 20;

function calcularSaldo(vitorias, derrotas){

    return vitorias - derrotas;
}

const saldoVitorias = calcularSaldo(vitorias, derrotas);

function  calcularNivel(saldoVitorias){
    let nivel;

    if(saldoVitorias<=10){
        nivel="Ferro";
    } else if(saldoVitorias<=20){
        nivel="Bronze";
    } else if(saldoVitorias<=50){
        nivel="Prata";
    } else if(saldoVitorias<=80){
        nivel="Ouro";
    } else if(saldoVitorias<=90){
        nivel="Diamante";
    } else if(saldoVitorias<=100){
        nivel="Lendario";
    } else{
        nivel="Imortal";
    }

    return  nivel;
}

const nivel = calcularNivel(saldoVitorias);

console.log(`O Herói tem saldo de **${saldoVitorias} vitorias** e está no nível **${nivel}**`);
//fim do desafio 2

if(saldoVitorias<0){
    console.log("Talvez seja uma boa voce desinstalar o jogo.");
}