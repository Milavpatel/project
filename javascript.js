function getComputerChoice() {
  const randomNum = Math.floor(Math.random() *3);

  if(randomNum === 0) {
    return "rock";
  } 
  else if(randomNum === 1) {
    return "paper";
  } 
  else{
    return "scissors";
  }
}

function getHumanChoice() {
    let humanInput = prompt("Enter your choice: rock, paper or scissors")
    humanInput = humanInput.toLowerCase();
    if(humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors"){
        alert("Please enter valid input");
        return getHumanChoice();
    }
    return humanInput;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
    if(humanSelection === "rock" ){
        if(computerSelection === "rock"){
           console.log("Tiee");
        }
        if(computerSelection === "scissors"){
            console.log("Congratsss you won !!!");
            humanScore++;
        }
        if(computerSelection === "paper"){
            console.log("OOPS, you lost ;)")
            computerScore++;
        }
    }
    if(humanSelection === "paper" ){
        if(computerSelection === "paper"){
            console.log("Tiee");
        }
        if(computerSelection === "rock"){
            console.log("Congratsss you won !!!");
            humanScore++;
        }
        if(computerSelection === "scissors"){
            console.log("OOPS, you lost ;)")
            computerScore++;
        }
    }
    if(humanSelection === "scissors" ){
        if(computerSelection === "scissors"){
            console.log("Tiee");
        }
        if(computerSelection === "paper"){
            console.log("Congratsss you won !!!");
            humanScore++;
        }
        if(computerSelection === "rock"){
            console.log("OOPS, you lost ;)")
            computerScore++;
        }
    }
    console.log(`Your choice: ${humanSelection} -- Computer's choice: ${computerSelection}\n`);

}
function playGame(){
    for(let i=0; i<5; i++){
        console.log(`Round ${i+1}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${humanScore} - Computer: ${computerScore}\n`);
    }

    if(humanScore > computerScore){
        return "Congratss You are Winner :)"
    }
    if(humanScore < computerScore){
        return "You lost ;)"
    }
    if(humanScore === computerScore){
        return "Game ended in a Tieee"
    }
    console.log("Thank youu");
    console.log("If you want to play again please refresh the site");
}
console.log(playGame())