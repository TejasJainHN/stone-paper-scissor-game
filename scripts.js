let userscore=0
let computerscore=0

const choices= document.querySelectorAll('.choice');

const drawgame=()=>{
    console.log('Game is draw')
    msg.innerText="Game was Draw,Play again!!"
    msg.style.backgroundColor="#081b31"
}

const msg=document.querySelector("#msg")

const userscorepara=document.querySelector('#user-score')
const computerscorepara=document.querySelector('#computer-score')

const showWinner=(userwin,userChoice,computerchoice)=>{
    if(userwin){
        userscore++
        userscorepara.innerText=userscore
        console.log("you win")
        msg.innerText="You Win! your "+userChoice+" beats "+ computerchoice
        msg.style.backgroundColor="green"
    }
    else{
        computerscore++
        computerscorepara.innerText=computerscore
        console.log("you loss")
        msg.innerText="You Loss! "+computerchoice+" beats "+ userChoice
        msg.style.backgroundColor="red"
    }
}

const genComputerChoice=()=>{
    const options=["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx]
}

const playgame=(userChoice)=>{
    console.log("choice was clicked",userChoice)
    const computerchoice = genComputerChoice();
    console.log("choice was clicked",computerchoice)

    if(userChoice==computerchoice){
        drawgame()
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            userwin=computerchoice==="paper"? false : true
        }
        else if(userChoice==="paper"){
            userwin=computerchoice==="scissors"? false : true
        }
        else {
            userwin=computerchoice==="rock"? false : true 
        }
        showWinner(userwin,userChoice,computerchoice)
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice)
    })
})

