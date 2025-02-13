
numUsuario = Number(prompt('Digite um numero'))

let num1 = 10
let num2 = 15


function media (numUsuario, num1 , num2){

    let calcular = (numUsuario + num1 + num2) / 3

    console.log(`Média Aritmétrica: ${calcular}`)

    
}

function menor (numUsuario, num1, num2){
    if ( numUsuario < num1 && numUsuario < num2){
        console.log(`O menor numero é : ${numUsuario}`)

    } else if (num1 < numUsuario && num1 < num2){
        console.log(`O menor numero é : ${num1}`)
 
    }else{
        console.log(`O menor numero é : ${num2}`)

    }
}

function maior (numUsuario, num1, num2){
    if ( numUsuario > num1 && numUsuario > num2){
        console.log(`O maior numero é : ${numUsuario}`)

    } else if (num1 > numUsuario && num1 > num2){
        console.log(`O maior numero é : ${num1}`)
 
    }else{
        console.log(`O maior numero é : ${num2}`)

    }
}


function maiorMenor (numUsuario, num1, num2){
    let diferenca = maior - menor 
    console.log(`diferença: ${diferenca}`)

}

media(numUsuario, num1, num2)
menor(numUsuario, num1, num2)
maiorMenor(numUsuario, num1, num2)