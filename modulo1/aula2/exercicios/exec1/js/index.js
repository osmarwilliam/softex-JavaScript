function calcularImc(peso,altura){
    return peso / altura**2;
}

function calcularSobrePeso(imc){
    if(imc >= 40){
        return "em Obesidade grau III";
    } else if (imc >= 35){
        return "em Obesidade grau II"
    } else if (imc >= 30){
        return "em Obesidade grau I"
    } else if (imc >= 25){
        return "no sobrepeso"
    } else if (imc > 18.5) {
        return "saudável demais"
    } else {
        return "magro demais"
    }
}

function escopo(){
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = formulario.querySelector('.nome');
        const altura = formulario.querySelector('.altura');
        const peso = formulario.querySelector('.peso');
        const idade = formulario.querySelector('.idade');
        const imc = calcularImc(Number(peso.value), Number(altura.value));

        console.log(imc);
        
        resultado.innerHTML = `${nome.value} seu imc é de: ${imc.toFixed(2)}` +
        ` e voce está ${calcularSobrePeso(imc)}`;

    }

    formulario.addEventListener('submit', recebeEventoForm);
}





escopo();