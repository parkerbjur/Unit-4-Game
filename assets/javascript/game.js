
// function Crystal (name) {
//     this.name = name;
//     this.value;
//     this.newValue = function() {
//         let x = Math.floor(Math.random() * 12) + 1
//         this.value = x;
//         this.name = name;
//         console.log(this.value)
//         console.log(this.name)
//     }
// }

// var crystal1 = new Crystal("crystal1")
// var crystal2 = new Crystal("crystal2")
// var crystal3 = new Crystal("crystal3")
// var crystal4 = new Crystal("crystal4")

let crystalValues = [2, 3, 4, 5];
let answer;
let currentGuess = 0;
let wins = 0;
let loses = 0;

function populateCrystalValues () {
    crystalValues = [];
    for(i=0; i<4 ; i++){
        let x = Math.floor(Math.random() *12) + 1;
        crystalValues.push(x);
    }
    console.log(crystalValues);
}

function newAnswer () {
    answer = Math.floor(Math.random() *100) + 20;
    console.log(answer);
}

function updateScreen () {
    document.getElementById("currentAnswerBox").innerText = `Target: ${answer}`;
    document.getElementById("currentGuessBox").innerText = `Current Guess: ${currentGuess}`;
    document.getElementById("displayWins").innerText = `Wins: ${wins}`;
    document.getElementById("displayLoses").innerText = `Loses: ${loses}`
}

function setup () {
    $(".gem").click(handleclick)
    populateCrystalValues();
    newAnswer();
    updateScreen()
}

function resetScreen() {
    populateCrystalValues();
    newAnswer();
    currentGuess = 0;
    updateScreen()
}

function winFunction() {
    wins++;
    resetScreen()
}

function loseFunction () {
    loses++;
    resetScreen();
}

function handleclick () {
    let x = event.currentTarget.id;
    let y = crystalValues[x];
    currentGuess = currentGuess + y;
    updateScreen();
    if(currentGuess > answer){
        loseFunction();
    }
    if(currentGuess == answer){
        winFunction();
    }
}