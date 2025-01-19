let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")

const genCompUser=()=>{
    const options=["paper","rock","scissors"];
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    msg.innerText="Game Was Draw.Play again";
    msg.style.backgroundColor="yellow";

    
}
const showWiner=(userWin,UserChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=(`You Win! your ${UserChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
          
    } else{
        compScore++;
        compScorepara.innerText=compScore;

        msg.innerText=`You Lose.${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor="red";

        
    }
}

const playGame=(UserChoice)=>{
    //user choice
    const compChoice=genCompUser();
    //comp choice

    if (UserChoice===compChoice) {
        drawGame();
        return;
    } 
    //determine if user win
    const userWin=
        (UserChoice==="rock" && compChoice==="scissor") ||
        (UserChoice==="scissors" && compChoice==="paper") ||
        (UserChoice==="paper" && compChoice==="rock");

        showWiner(userWin,UserChoice,compChoice)
    };
       


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id")
        playGame(UserChoice)
    }) 
});