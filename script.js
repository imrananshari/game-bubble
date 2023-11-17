var timer = 60;
var score = 0;

var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var bpnl2 = document.querySelector('#bpnl2');
var scorelem = document.querySelector('#scorelem');
var guess;
setInterval(function(){
    if(timer>0)
    {
       --timer;
       timerelem.textContent= timer;
    }
    else{
        bpnl2.innerHTML= '<h1 id="center">GAME OVER</h1>'
    }
}, 1000);
 
function makebubble()
{
    for(i=0;i<170;i++)
    {
        var randomnum = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomnum}</div>`;
        bpnl2.innerHTML += template;
    }
}
 
function guessnum()
{
    guess = Math.floor(Math.random()*10);
    hitelem.textContent = guess;
}

 bpnl2.addEventListener('click',function(details){
     var clickbvalue= details.target.textContent;
     if(clickbvalue==guess)
     {
         score=score + 10;
         scorelem.textContent= score;
         guessnum();
         bpnl2.innerHTML='';
         makebubble();
     }
     else{
         alert('wrong bubble');
     }
 });


guessnum();
makebubble();