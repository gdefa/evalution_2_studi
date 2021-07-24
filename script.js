// Les varibales //


var joueur1 = document.getElementById('player1');
var joueur2 = document.getElementById('player2');
var scoreGlobalJ1 = document.getElementById('scoreGlobalJ1');
var scoreGlobalJ2 = document.getElementById ('scoreGlobalJ2');
var currentScoreJ1 = document.getElementById('currentScoreJ1');
var currentScoreJ2 = document.getElementById('currentScoreJ2');


const buttonHoldDice = document.getElementByClassName('holdDiceButton');

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

};


