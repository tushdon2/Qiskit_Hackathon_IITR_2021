// My written functions
document.getElementById('gameover').style.visibility = 'hidden';
document.getElementById('butt').style.visibility = 'hidden';

function doSomething(randNum) {
    eel.classify()(function(ret) {
        userNum = ret;
        doSomethinElse(randNum, userNum);
        console.log("userNum:" + userNum);
    }) ;

}

function doSomethinElse(randNum, userNum) {

    let clickedBtn = randomClasses[userNum];
    showIcon.className = clickedBtn;
    let randomNum = randNum;
    console.log(randomNum);

    computerShowIcon.className = randomClasses[randomNum];    
    console.log(showIcon.className + " " + computerShowIcon.className);
    
    // comparators
    if(showIcon.className === computerShowIcon.className){
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "It's a Tie ! ";
        text.style.color = 'orange';
    } 
    // if it's not a Tie.
    else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = 'rgb(1, 146, 1)';
    }
    else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Lost ! ";
        text.style.color = 'red';
    }
    else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Lost ! ";
        text.style.color = 'red';
    }
    else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[3]){
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Lost ! ";
        text.style.color = 'red';
    }
    else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = 'rgb(1, 146, 1)';
    }
    else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Lost ! ";
        text.style.color = 'red';
    }
    else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[4]){
    cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[3]){
        cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[2]){
        cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[4]){
        cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[0]){
        cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[1]){
        cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[0]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[4]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[3]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[2]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[3]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    
    else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[4]){
        pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    }
    else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[3]){
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Lost ! ";
        text.style.color = 'red';
    }
    
    else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[2]){
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = 'rgb(1, 146, 1)';
    }
    else{
    console.log("Try Again!");
    text.innerHTML = "Try Again! ";
    }
}

eel.expose(take_snapshot);
function take_snapshot() {

    eel.getRandomNumber()(function(ret) {
        randNum = ret;
        doSomething(randNum);
        console.log("randNum:" + randNum);
    }) ;

    

    if(cScore.innerHTML==5){
        text.innerHTML="YOU LOST THE GAME";
        document.getElementById('gameover').style.visibility = 'visible';  
        document.getElementById('butt').style.visibility = 'visible'; 
        alert("You Lost");
    
    }
    if(pScore.innerHTML==5){
        text.innerHTML="YOU WON THE GAME";
        document.getElementById('gameover').style.visibility = 'visible';
        document.getElementById('butt').style.visibility = 'visible'; 
        alert("You Won");
    }

    Webcam.snap( function(data_uri) {
           downloadImage('snap', data_uri);
    } );
}


Webcam.set({
width: 450,
height: 300,
image_format: 'jpeg',
jpeg_quality: 90
});

Webcam.attach( '#my_camera' );


downloadImage = function (name, datauri) {
    var a = document.createElement('a');
    a.setAttribute('download', name + '.jpg');
    a.setAttribute('href', datauri);
    a.click();
}


function myFunction() {
console.log("myfunction is called")
window.location.reload();
}


let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.user i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors","far fa-hand-lizard", "far fa-hand-spock"];
const text = document.getElementById('demo');