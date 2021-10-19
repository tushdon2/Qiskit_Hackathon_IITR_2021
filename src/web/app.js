// My written functions
document.getElementById('gameover').style.visibility = 'hidden';
document.getElementById('butt').style.visibility = 'hidden';
// document.getElementById('div1').style.visibility = 'visible';
//     document.getElementById('div2').style.visibility = 'visible';
eel.expose(take_snapshot);
function take_snapshot() {
    // document.getElementById('btn').click();

    // set my click button
    let clickedBtn = "fas fa-hand-rock";
           showIcon.className = clickedBtn;
           console.log("This is showicon.classnamwen")
            console.log(showIcon.className);

            //random num gen
    let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           console.log("This is computershow icopn")
           console.log(computerShowIcon.className)
            console.log(showIcon.className === computerShowIcon.className)
// comparators
if(showIcon.className === computerShowIcon.className){
    pScore.innerHTML = pScore.innerHTML;
    cScore.innerHTML = cScore.innerHTML;
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'orange';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'orange';
} 
// if it's not a Tie.
else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
    pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'rgb(1, 146, 1)';
}else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
    cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Loosed ! ";
    text.style.color = 'red';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'red';
}else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
    cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Loosed ! ";
    text.style.color = 'red';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'red';
}else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
    pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'rgb(1, 146, 1)';
}else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
    cScore.innerHTML = computerScore;
    computerScore++;
    text.innerHTML = "You Loosed ! ";
    text.style.color = 'red';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'red';
}else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
    pScore.innerHTML = playerScore;
    playerScore++;
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
 //    text2.innerHTML = text.innerHTML;
 //    text2.style.color = 'rgb(1, 146, 1)';
}
//rock kill lizard
else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[4]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
 //lizard kill spock
else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[3]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
//spock kill scissor
else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[2]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
//scissor kill lizqard
else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[4]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
//spock kiill rock
else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[0]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
//lizard kill paper
else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[1]){
 pScore.innerHTML = playerScore;
 playerScore++;
 text.innerHTML = "It's a Win ! ";
 text.style.color = 'rgb(1, 146, 1)';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'rgb(1, 146, 1)';
}
//we lose conditions
//rock kill lizard
else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[0]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
//lizard kill spock
else if(showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[4]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
//spock kill scissor
else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[3]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
//scissor kill lizard
else if(showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[2]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
//spock kill rock
else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[3]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
//lizard kill paper
else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[4]){
 cScore.innerHTML = computerScore;
 computerScore++;
 text.innerHTML = "You Loosed ! ";
 text.style.color = 'red';
 // text2.innerHTML = text.innerHTML;
 // text2.style.color = 'red';
}
else{
 console.log("FUCK")
}

if(cScore.innerHTML==5){
    text.innerHTML="YOU LOST THE GAME"
    // element.style.visibility = 'hidden';      // Hide
    document.getElementById('gameover').style.visibility = 'visible';  
    document.getElementById('butt').style.visibility = 'visible'; 
    alert("You Lost");
    // document.getElementById('div1').style.visibility = 'hidden';
    // document.getElementById('div2').style.visibility = 'hidden';    // Show
  
}
if(pScore.innerHTML==5){
    text.innerHTML="YOU WON THE GAME";
    document.getElementById('gameover').style.visibility = 'visible';
    document.getElementById('butt').style.visibility = 'visible'; 
    alert("You Won");
    // document.getElementById('div1').style.visibility = 'hidden';
    // document.getElementById('div2').style.visibility = 'hidden';
}

    Webcam.snap( function(data_uri) {
        //    console.log(data_uri);
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
        a.setAttribute('download', name + '.png');
        a.setAttribute('href', datauri);
        a.click();
        
    }

   
        // When the user clicks on <div>, open the popup
        function myFunction() {
        //   var popup = document.getElementById("myPopup");
        //   popup.classList.toggle("show");
        console.log("myfunction is called")
        window.location.reload();
        }
     

//bakhititirgigj
//constatnst

let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.user i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors","far fa-hand-spock","far fa-hand-lizard"];
const text = document.getElementById('demo');

eel.getRandomNumber()(randomNumbers)

var i = -1;
function randomNumbers(arr) { 
    i++;
    return arr[i];
}

eel.classify()(classify)
