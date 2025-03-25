var peso;
var altura;
var imc;
var resultado;


function calcular(event) {
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById("altura").value;
    
    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");
    
    if (imc < 17) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está muito abaixo do peso!'
    }else if (imc >= 17 && imc < 18.5) {        
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!'
    }else if (imc >= 18.5 && imc <= 25) {        
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!'
    }else if (imc > 25 && imc <= 30) {        
        resultado.innerHTML ="<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está acima do peso!";
    }else if (imc > 30) {
        resultado.innerHTML ="<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está na obesidade!";
    }

    // Limpar campos após cálculo.
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}






// --- ESTRUTURAS DE REPETIÇÃO ---
//for
/*
var valor = prompt("Digite um número: ");

for(y = 0; y <= valor; y++){
    document.write("<br> O valor de Y é: " + y);
}






// while
var x = 0;
while(x < 15){
    document.write("<br> O valor de x é: " + x);
    x++;
}

*/









/*
--- CÓDIGO DAS AULAS UDEMY SOBRE FUNÇÕES ---

var areaVar = document.getElementById('areaId')

function entrar() {
    var nome = prompt('Informe seu nome:')

    if(nome === "" || nome === null){
        alert('Algo deu errrado')
        areaId.innerHTML = "Tente novamente";
    } else{
        areaId.innerHTML = "Bem vindo " + nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        areaVar.appendChild(botaoSair);
    }
    
    
}

function sair(){
    alert(" Até mais!  ")
    areaId.innerHTML = "Você saiu!" 
}


function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2

    if(media >= 7){
        console.log("O aluno está aprovado com média " + media)
    }else if(media < 7){
        console.log("O aluno está REPROVADO com média " + media)
    }

} 

*/