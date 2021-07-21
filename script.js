// Les varibales //


var joueur1 = document.getElementById('player1');
var joueur2 = document.getElementById('player2');
var scoreGlobalJ1 = document.getElementById('scoreGlobalJ1');
var scoreGlobalJ2 = document.getElementById ('scoreGlobalJ2');
var currentScoreJ1 = document.getElementById('currentScoreJ1');
var currentScoreJ2 = document.getElementById('currentScoreJ2');

const buttonRollDice = document.getElementsByClassName('RollDiceButton');
const buttonHoldDice = document.getElementsByClassName('holdDiceButton');

// initialisation nouvelle partie 

document.getElementById('newGameInit').addEventListener("click", function(){
    alert("Vous lancez une nouvelle partie !");
    init()
});

function init(){
    if (newGameInit === true){
        scoreGlobalJ1 = 0;
        scoreGlobalJ2 = 0;
    }
    
}


    