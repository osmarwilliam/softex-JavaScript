export class Carro {
    constructor(modelo, marca, cor, anoLancamento, velocidade){
        this.modelo = modelo;
        this.marca = marca;
        this.cor= cor;
        this.anoLancamento = anoLancamento;
        this.velocidade = velocidade;
    }

    age(){
        const date = new Date;
        return date.getFullYear() - this.anoLancamento;
    }

    mostrarDados(){
        console.log(`\nmodelo: ${this.modelo}
        marca: ${this.marca}
        cor: ${this.cor}
        ano Lancamento: ${this.anoLancamento}, seu carro tem ${this.age()} anos
        velocidade: ${this.velocidade}`)
    }

    acelerar(velocidadeAumentar){
        this.velocidade += velocidadeAumentar;
        console.log(`Velocidade aumentada para : ${this.velocidade}`);
    }
    
    frear(velocidadeAumentar){
        this.velocidade -= velocidadeAumentar;
        console.log(`Velocidade diminuida para : ${this.velocidade}`);
    }

    mostraVelocidade(){
        console.log(`Sua velocidade atual é de: ${this.velocidade}`);
    }
}
