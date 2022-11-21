let setScore = 60;
window.onload = alert("You need to get "+setScore+" apples and bananas in order to be successful");


const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');
let s = document.getElementById('score');

let timer = 30;


let bowl = new Image();
bowl.src = 'bowl.png';
bowl.width = 130;

let banana = new Image();
banana.src = 'banana.png';
banana.height = 50;

let appleI = new Image();
appleI.src = 'apple.png';
appleI.height = 50;


let x = canvas.width / 2 - 130 / 2 ;
let y = canvas.height - 110;
// let bowlX = canvas.width / 2 - 130 / 2;
// let bowlY = canvas.height - 110;
let radius = bowl.width;
let speed = 20;
let fruitX = 0;
let fruitY = 0;
let fruitSpeed = 10;
let score = 0;

const bananaS = 70;
const appleS = 70;

let fruitYPos = 0;
let fruitXPos = 50;
const apple = 30;
let fruitYspeed = 20;
let fruitXspeed = 20;

let fruitGYPos = 0;
let fruitGXPos = 50;
let fruitGYspeed = 20;
let fruitGXspeed = 20;

let playerSize = 130;

let leftPressed = false;
let rightPressed = false;

//game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    drawImg(bowl,x,y,playerSize,playerSize);
    // drawBanana(banana, fruitX,fruitY, 50,50);
    drawGreenBlob(banana, fruitXPos, fruitYPos, bananaS, bananaS);
    blobMove();
    drawGreenApple(appleI, fruitGXPos, fruitGYPos, appleS, appleS);
    GMove();
    // endGame();
    // bananaMove();
    inputs();
    boundaryCheck();
    scorecalc();
    Check();
    timer -= 1 / 70;
    const round = timer.toFixed(0);
    document.getElementById("demo").innerHTML = round + "s";
        if(timer <= 0){
            window.location.replace("black.html");
        }
}

// function endGame(){
//     if(score = 3){
//         window.location.replace("black.html");    
//     }
// }

function Check(){
    if(score >= setScore){
        window.location.replace("winner.html");
    }
}



function scorecalc(){
    s.innerHTML = "Score: "+ score;
    
}


function drawGreenBlob(src,x,y,w,h){
    // ctx.fillStyle = 'red';
    // ctx.beginPath();
    // ctx.arc(fruitXPos,fruitYPos, apple, 0 , Math.PI * 2);
    // ctx.fill();
    ctx.drawImage(src,x,y,w,h);
}

function blobMove(){
    fruitYPos += fruitYspeed;
    if(fruitYPos > canvas.height){
        fruitYPos = 0 - 100;
        fruitXPos = Math.floor(Math.random()*(canvas.width - 100))
        fruitYspeed = Math.floor(Math.random()*(15 - 10)+10);
    }
    if(fruitYPos + apple > y && fruitYPos < y + playerSize && fruitXPos + playerSize > x && fruitXPos < x + playerSize){
        fruitYPos = 0 - 100;
        fruitXPos = Math.floor(Math.random()*(canvas.width - 100))
        fruitYspeed = Math.floor(Math.random()*(15 - 10)+10);
        score += 1;
    }

}


function drawGreenApple(src,x,y,w,h){
    // ctx.fillStyle = '#66b447';
    // ctx.beginPath();
    // ctx.arc(fruitGXPos,fruitGYPos, apple, 0 , Math.PI * 2);
    // ctx.fill();
    ctx.drawImage(src,x,y,w,h);

}

function GMove(){
    fruitGYPos += fruitGYspeed;
    if(fruitGYPos > canvas.height){
        fruitGYPos = 0 - 100;
        fruitGXPos = Math.floor(Math.random()*(canvas.width - apple));

    }
    if(fruitGYPos + apple > y && fruitGYPos < y + playerSize && fruitGXPos + playerSize > x && fruitGXPos < x + playerSize){
        fruitGYPos = 0 - 100;
        fruitGXPos = Math.floor(Math.random()*(canvas.width - apple))
        fruitGYspeed = Math.floor(Math.random()*(15 - 10)+10);
        score += 1;
    }
}




// function bananaMove(){
//     fruitY += fruitSpeed;
//     fruitX = Math.random(canvas.width,canvas.height); 
// }


// function fruitCheck(){
//     if(fruitY > canvas.height){
//         window.location.replace("black.html");
//     }
// }

function drawImg(src,x,y,w,h){
    ctx.drawImage(src,x,y,w,h);
}



// function drawBanana(src,x,y,w,h){
//     ctx.drawImage(src,x,y,w,h);
// }




function boundaryCheck(){
    if(x < radius - radius){
        x = radius - radius;
    }
    if(x > canvas.width - radius){
        x = canvas.width - radius;
    }
}

function inputs(){
    if(leftPressed){
        x = x - speed;
    }
    if(rightPressed){
        x = x + speed;
    }
}

function clearScreen() {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
    if(event.keyCode == 37){
        leftPressed = true;
    }
    if(event.keyCode == 39){
        rightPressed = true;
    }
    if(event.keyCode == 65){
        leftPressed = true;
    }
    if(event.keyCode == 68){
        rightPressed = true;
    }
}

    function keyUp(event) {
        if(event.keyCode == 37){
            leftPressed = false;
        }
        if(event.keyCode == 39){
            rightPressed = false;
        }
        if(event.keyCode == 65){
            leftPressed = false;
        }
        if(event.keyCode == 68){
            rightPressed = false;
        }
    }

drawGame();
// setInterval(drawGame, 1000 / 60);






