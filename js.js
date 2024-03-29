function startGame(){
    gameLoop();
}

var count=0;
var personVis = false;
var score=0;
function gameLoop(){
    personVis = !personVis;
    if (personVis==true){
        var classToset="character visible"
    }
    else{
        var classToset="character hidden"
    }
    var gamezone=document.getElementById("gamezone");
    for (var i=0; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].onclick=function(){
            score-=2;
            var parent=document.getElementById("Ball");
            parent.innerHTML=score;
        }
    }
    // Выбор случайного числа
    var randomNum = Math.floor(Math.random()*8)+1;
    
    gamezone.children[randomNum-1].className=classToset+" suguru";
    count++; //count = count + 1
    gamezone.children[randomNum-1].onclick=function(){
        score+=1;
        var parent=document.getElementById("Ball");
        parent.innerHTML=score;
    }


    if (count < 12){
        setTimeout(gameLoop,personVis ? 1000:3000);
    }
    else{
        alert("Игры окнчена");
        location.reload();
    }   
}