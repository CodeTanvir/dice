'use string'
//  let me

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0'); 
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// let rotdice = document.querySelector('.newdice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
// starting condition

score0El.textContent = 0;
score1El.textContent = 0;
// diceEl.classList.add('hidden'); this is a code---


let scores, currentscore, activePlayer, playing

const init = function(){
     scores = [0, 0];
   currentscore = 0;
   activePlayer = 0; 
    playing = true;
    diceEl.src = 'dice-1.png'
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player-win');
    player1El.classList.remove('player-win');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
};
init();

const switcPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');

}

btnRoll.addEventListener('click', function(){

if(playing){

    dice = Math.trunc(Math.random() * 6) + 1;
    // document.querySelector('.current-score').textContent = dice;
    diceEl.src = `dice-${dice}.png`;

    diceEl.classList.add('newdice');
   
if(dice !== 1){
    currentscore += dice;
    // score0El.textContent = currentscore;
document.getElementById(`current--${activePlayer}`).textContent = currentscore;

// document.querySelector(`.player--${activePlayer}`
// ).style.background = 'rgba(255, 255, 255, 0.4)';
diceEl.classList.remove('newdice');

}else{
    switcPlayer();
}
}
})

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer] += currentscore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >=100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`)
        .classList.add('player-win');

        document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    }else{
        switcPlayer();
        diceEl.classList.add('newdice');
    }
    }
})


btnNew.addEventListener('click', init);
