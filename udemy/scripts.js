// --- ESTRUTURAS DE REPETIÇÃO ---
//for

var valor = prompt("Digite um número: ");

for(y = 0; y <= valor; y++){
    document.write("<br> O valor de Y é: " + y);
}




/*

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