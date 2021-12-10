"use strict";

let player = 1;
let finish = false;

const btnRollDice = document.querySelector(".btn.btn--roll");
btnRollDice.addEventListener('click',rollDice);

const btnHold = document.querySelector(".btn.btn--hold");
btnHold.addEventListener('click',hold);

const btnNew = document.querySelector(".btn.btn--new");
console.log(btnNew);
btnNew.addEventListener('click',reset);


 function rollDice (){
    const items = [1,2,3,4,5,6];
    let currentVal = 0;
    let choice = items[Math.floor(Math.random() * items.length)];
    if (choice !== 1){
       let dice= document.querySelector(".dice");
       dice.src=`./images/dice-${choice}.png`;
       let currentVal = parseInt(document.querySelector(`#current--${player-1}`).innerHTML);
       currentVal+=choice;
       document.querySelector(`#current--${player-1}`).innerHTML=currentVal;
       return currentVal
    } else {
        document.querySelector(`#current--${player-1}`).innerHTML=0;
        let dice= document.querySelector(".dice");
        dice.src=`./images/dice-${choice}.png`;
        switchPlayer();
        return currentVal=0;   
    }
}
function switchPlayer(){ 
    if (player ===1){
        player = 2;
        document.querySelector(".player.player--0").className= "player player--0";
        document.querySelector(".player.player--1").className= "player player--1 player--active";
        console.log()
    }else {
        player =1;
        document.querySelector(".player.player--0").className= "player player--0 player--active";
        document.querySelector(".player.player--1").className= "player player--1";
    }
}

function hold(){
  let currentVal =parseInt(  document.querySelector(`#current--${player-1}`).innerHTML);
  let score = parseInt( document.querySelector(`#score--${player-1}`).innerHTML)+currentVal;
  document.querySelector(`#current--${player-1}`).innerHTML = 0;
  document.querySelector(`#score--${player-1}`).innerHTML = score;
  if (score >= 100){
    document.querySelector(`.player.player--${player-1}`).className= `player player--${player-1} player--winner`;
    btnRollDice.removeEventListener('click',rollDice);
    btnHold.removeEventListener('click',hold);
  } else {
    switchPlayer();
  }
}

function reset(){
    console.log("inside reset");
    player =1;
    btnRollDice.addEventListener('click',rollDice);
    btnHold.addEventListener('click',hold);
    document.querySelector(".player.player--0").className= "player player--0 player--active";
    document.querySelector(".player.player--1").className= "player player--1";
    document.querySelector("#current--0").innerHTML = 0;
    document.querySelector(`#current--1`).innerHTML = 0;
    document.querySelector(`#score--0`).innerHTML = 0;
    document.querySelector(`#score--1`).innerHTML = 0;
}

