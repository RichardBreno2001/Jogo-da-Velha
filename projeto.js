let x = document.querySelector('.jogador-x')
let o = document.querySelector('.jogador-o')
let boxes = document.querySelectorAll('.box')
//Botões de bifurcação
let btn1 = document.querySelector('#jogadores-2')
let btn2 = document.querySelector('#contra-IA')
//Mensaegm 
let msg = document.querySelector('#mensagem')
let p_msg = document.querySelector('#p_vazio')
let secondPlayer


//Criando o contador de jogadas (definir qual a vez de quem jogar)
let player1 = 0
let player2 = 0
// Será incrementado conforme ocorrem as jogadas

//Adicionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',function(){
        let El = QuemJoga(player1,player2)

        if(this.childNodes.length == 0) {
            //Clonando os elementos
            let CloneEl = El.cloneNode(true)
            this.appendChild(CloneEl)
     
            QuemVenceu()
        }

        //Computando a jogada
        if(player1 == player2) {
            player1++
        } else {
            player2++
        }
    })
}

//Definindo quem joga
function QuemJoga(player1,player2) {
    if(player1 == player2) {
        El = x
    } else {
        El = o
    }
    return El
}

//Definindo o vencedor

function QuemVenceu() {

    let b1 = document.getElementById('bloco-1')
    let b2 = document.getElementById('bloco-2')
    let b3 = document.getElementById('bloco-3')
    let b4 = document.getElementById('bloco-4')
    let b5 = document.getElementById('bloco-5')
    let b6 = document.getElementById('bloco-6')
    let b7 = document.getElementById('bloco-7')
    let b8 = document.getElementById('bloco-8')
    let b9 = document.getElementById('bloco-9')


    //LINHAS HORIZONTAIS


    //Verificando se a primeira linha horizontal está preenchida
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b1Filho = b1.childNodes[0].className
        let b2Filho = b2.childNodes[0].className
        let b3Filho = b3.childNodes[0].className

        if(b1Filho == 'jogador-x' && b2Filho == 'jogador-x' && b3Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b1Filho == 'jogador-o' && b2Filho == 'jogador-o' && b3Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

     //Verificando se a segunda linha horizontal está preenchida
     if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b4Filho = b4.childNodes[0].className
        let b5Filho = b5.childNodes[0].className
        let b6Filho = b6.childNodes[0].className

        if(b4Filho == 'jogador-x' && b5Filho == 'jogador-x' && b6Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b4Filho == 'jogador-o' && b5Filho == 'jogador-o' && b6Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

       //Verificando se a terceira linha horizontal está preenchida
       if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b7Filho = b7.childNodes[0].className
        let b8Filho = b8.childNodes[0].className
        let b9Filho = b9.childNodes[0].className

        if(b7Filho == 'jogador-x' && b8Filho == 'jogador-x' && b9Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b7Filho == 'jogador-o' && b8Filho == 'jogador-o' && b9Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

    // LINHAS VERTICAIS


     //Verificando se a primeira linha vertical está preenchida
     if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b1Filho = b1.childNodes[0].className
        let b4Filho = b4.childNodes[0].className
        let b7Filho = b7.childNodes[0].className

        if(b1Filho == 'jogador-x' && b4Filho == 'jogador-x' && b7Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b1Filho == 'jogador-o' && b4Filho == 'jogador-o' && b7Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

     //Verificando se a segunda linha vertical está preenchida
     if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b2Filho = b2.childNodes[0].className
        let b5Filho = b5.childNodes[0].className
        let b8Filho = b8.childNodes[0].className

        if(b2Filho == 'jogador-x' && b5Filho == 'jogador-x' && b8Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b2Filho == 'jogador-o' && b5Filho == 'jogador-o' && b8Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

     //Verificando se a terceira linha vertical está preenchida
     if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b3Filho = b3.childNodes[0].className
        let b6Filho = b6.childNodes[0].className
        let b9Filho = b9.childNodes[0].className

        if(b3Filho == 'jogador-x' && b6Filho == 'jogador-x' && b9Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b3Filho == 'jogador-o' && b6Filho == 'jogador-o' && b9Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

    // LINHAS DIAGONAIS 

     //Verificando se a primeira linha diagonal está preenchida
     if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b1Filho = b1.childNodes[0].className
        let b5Filho = b5.childNodes[0].className
        let b9Filho = b9.childNodes[0].className

        if(b1Filho == 'jogador-x' && b5Filho == 'jogador-x' && b9Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b1Filho == 'jogador-o' && b5Filho == 'jogador-o' && b9Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

     //Verificando se a segunda linha diagonal está preenchida
     if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        //Pegando as classes dos elementos filhos dos blocos

        let b3Filho = b3.childNodes[0].className
        let b5Filho = b5.childNodes[0].className
        let b7Filho = b7.childNodes[0].className

        if(b3Filho == 'jogador-x' && b5Filho == 'jogador-x' && b7Filho == 'jogador-x') {
            console.log('Jogador x venceu')
        } else if(b3Filho == 'jogador-o' && b5Filho == 'jogador-o' && b7Filho == 'jogador-o') {
            console.log('Jogador o venceu')
        }

    }

    let counter = 0

    for(let i2 = 0; i2 < boxes.length; i2++) {
        if(boxes[i2].childNodes[0] != undefined) {
            counter++
        }
    }
    if(counter == 9) {
        console.log('Deu velha')
    }
}