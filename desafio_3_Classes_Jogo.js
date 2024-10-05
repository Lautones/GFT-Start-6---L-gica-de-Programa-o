//desafio 3 - Escrevendo as Classes de Um Jogo

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(){
        let ataque;

        switch (this.tipo){
            case "bardo":
                ataque="uma bela canção";
            break;

            case "mago":
                ataque = "magia";
            break;

            case "guerreiro":
                ataque = "espada";
            break;

            case "monge":
                ataque="artes marciais";
            break;

            case "ninja":
                ataque="shuriken";
            break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new heroi("Zephyros", 500, "mago");
let guerreiro = new heroi("Uhtred", 43, "guerreiro");
let monge = new heroi("Ling", 28, "monge");
let ninja = new heroi("Tsuki", 19, "ninja");
let bardo = new heroi("Kvothe", 14, "bardo");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
bardo.atacar();