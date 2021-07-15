let randomNumber = Math.floor(Math.random() * 100)+1;
console.log(randomNumber)
let attempt =20;
function guessNumber(){
    let result = document.querySelector(".result");
    console.log(result)
    let yourNumber=document.querySelector("#userInput").value;

    if (randomNumber == yourNumber){
        document.querySelector(".result").innerHTML="Felicitation Bravo..."


    }else if(randomNumber >yourNumber){
        if(attempt>1){
            document.querySelector(".result").innerHTML="low up!";
            attempt--;
            document.querySelector(".attempt").innerHTML=attempt;
        }else{
            document.querySelector(".result").innerHTML="you lost the game try again!"
            document.querySelector(".attempt").innerHTML = 0;
        }

    }else if (randomNumber < yourNumber){
        if (attempt > 1) {
            document.querySelector(".result").innerHTML = "Too high! DOWN"
            attempt--
            document.querySelector(".attempt").innerHTML = attempt
        }else {
            document.querySelector(".result").innerHTML = "You lost the game😥 Try again!!!"
            document.querySelector(".attempt").innerHTML = 0;
        }
    }else {
        document.querySelector(".result").innerHTML = "⛔️ No number!"
    }
}    