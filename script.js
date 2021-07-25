// Les varibales //


var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var scoreGlobalJ1 = document.getElementById('scoreGlobalJ1');
var scoreGlobalJ2 = document.getElementById ('scoreGlobalJ2');
var currentScoreJ1 = document.getElementById('currentScoreJ1');
var currentScoreJ2 = document.getElementById('currentScoreJ2');
var resultatDes = document.getElementById('resultatDes');

var globalPlayer1 = document.getElementById('globalPlayer1');
var globalPlayer2 = document.getElementById('globalPlayer2');

var activePlayer = globalPlayer1;

var imgDiceRandom = [
    "images/des_1.jpg",
    "images/des_2.jpg",
    "images/des_3.jpg",
    "images/des_4.jpg",
    "images/des_5.jpg",
    "images/des_6.jpg",
];

// initialisation nouvelle partie 

document.getElementById("newGameInit").onclick= init;

function init(){

    scoreGlobalJ1.textContent=0;
    scoreGlobalJ2.textContent=0;
    currentScoreJ1.textContent=0;
    currentScoreJ2.textContent=0;
    resultatDes.innerHTML ="";
    activePlayer = globalPlayer1;

};


// Bouton random lancement de dès

document.getElementById('rollDiceButton').onclick= rDiceRandom;

function rDiceRandom() {

    var randomNumber = Math.floor(Math.random()* imgDiceRandom.length);
    var pointDice = imgDiceRandom.indexOf(imgDiceRandom[randomNumber]) + 1;
    
    resultatDes.innerHTML = '<img class="w-80 h-80" src= ' + imgDiceRandom[randomNumber] + '>';
    if (pointDice==1){
        if (activePlayer == globalPlayer1){
            currentScoreJ1.textContent = 0;
        } else {
            currentScoreJ2.textContent = 0;
        } changePlayer();
    }

    else {
    if ((pointDice >= 2)&&(activePlayer == globalPlayer1)){
        currentScoreJ1.textContent = parseInt(currentScoreJ1.textContent) + pointDice;
    } else {
        currentScoreJ2.textContent = parseInt(currentScoreJ2.textContent) + pointDice;
    } }
}; 

// Changement de joueur 

function changePlayer(){
   currentScoreJ1.textContent=0;
   currentScoreJ2.textContent=0;

   activePlayer = activePlayer == globalPlayer1 ? globalPlayer2 : globalPlayer1;  
};


// bouton hold 

document.getElementById('holdDiceButton').onclick = holdDice;

function holdDice() {
    if (activePlayer == globalPlayer1){
        scoreGlobalJ1.textContent = parseInt(scoreGlobalJ1.textContent) + parseInt(currentScoreJ1.textContent);
        scoreGlobalJ1.textContent >= 100 ? endGame() : changePlayer();
        
    } else {
        scoreGlobalJ2.textContent = parseInt(scoreGlobalJ2.textContent) + parseInt(currentScoreJ2.textContent);
        scoreGlobalJ2.textContent >= 100 ? endGame() : changePlayer();
    }
};

function endGame() {
    alert('Vous avez gagné la partie !!!');
};