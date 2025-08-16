const myGuess = document.getElementById("myGuess");
const mySubmit = document.getElementById("mySubmit");
const myAnswer = document.getElementById("myAnswer");
const myInput = document.getElementById("myInput");
let minNum = 1;
let maxNum = 20;
let num = Math.floor(Math.random() * maxNum) + minNum;
console.log(num);
let score = 0;
let scoreLabel = document.getElementById("scoreLabel")
mySubmit.onclick = function () {
    let guess = Number(myInput.value);
    if (guess === num) {
        myGuess.textContent = `Your guess was ${guess}.`;
        myAnswer.textContent = "Correct!";
        num = Math.floor(Math.random() * maxNum) + minNum;
        console.log("New number:", num);
    } else if (guess < 1){
        myGuess.textContent = "Number can't be below 1!";
        myAnswer.textContent = "";
    } else if (guess > 20){
        myGuess.textContent = "Number can't be over 20";
        myAnswer.textContent = "";
    } else if (guess > num) {
        myGuess.textContent = `Your guess was ${guess}.`;
        myAnswer.textContent = "Too high!";
        score ++;
        scoreLabel.textContent = `Score: ${score}`;
    } else if (guess < num) {
        myGuess.textContent = `Your guess was ${guess}.`;
        myAnswer.textContent = "Too low";
        score ++;
        scoreLabel.textContent = `Score: ${score}`;
    } else{
        myGuess.textContent = "";
        myAnswer.textContent = "error";
    }
    if(score === 15){
        myGuess.textContent = "Your score has reached 15";
        myAnswer.textContent = `The answer was ${num}. Game has restarted`;
        score = 0;
        scoreLabel.textContent = `Score: ${score}`;
        num = Math.floor(Math.random() * maxNum) + minNum;
        console.log("Restart number:", num);
    }
}
