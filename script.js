const problem = document.getElementById('problem');
const input = document.getElementById('input');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const level = document.getElementById('level');

let point = 0;
let lvlup = 0;
let lvl = 1;
let prob1, prob2, prob3, correct1, correct2;
var timeleft = 10;
var Timer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
    clearInterval(Timer);
  if(document.getElementById("progressBar").value >= 10){
    window.open("gameover.html", "_self");
  }
},1000);

getQuestion();

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    let inp = input.value;
    input.value = null;
    switch (lvl) {
      case 1:
        if(inp == correct1){
          checkAns(true);
        } else {
          checkAns(false);
        }
      break;
      case 2:
        if(inp == prob2){
          checkAns(true);
        } else {
          checkAns(false);
        }
      break;
      case 3:
        if(inp == correct2){
          checkAns(true);
        } else {
          checkAns(false);
        }
      break;
      case 4:
        if(inp == prob3){
          checkAns(true);
        } else {
          checkAns(false);
        }
      break;
    }
  }
})

function getNumber(l){
  switch (l) {
    case 1:
        return Math.floor(Math.random()*9)+1;
      break;
    case 2:
        return Math.floor(Math.random()*9)+1;
      break;
    case 3:
        return Math.floor(Math.random()*9)+1;
      break;
    case 4:
        return Math.floor(Math.random()*9)+1;
      break;
    default:
      console.log("Error");
    break;
  }

}

function getQuestion(){
  prob1 = getNumber(lvl);
  prob2 = getNumber(lvl);
  prob3 = getNumber(lvl);
  correct1 = prob1 * prob2;
  correct2 = prob1 + (prob2 * prob3);
  if(lvl == 1 || lvl == 2){
    console.log(prob1 + "x" + prob2 + "=" + correct1);
  } else {
    console.log(prob1 + "+" + prob2 + "x" + prob3 + "=" + correct2);
  }
  switch (lvl) {
    case 1:
      problem.innerHTML = prob1 + "x" + prob2 + "=" + "?";
    break;
    case 2:
      problem.innerHTML = prob1 + "x" + "?" + "=" + correct1;
    break;
    case 3:
      problem.innerHTML = prob1 + "+" + prob2 + "x" + prob3 + "=" + "?";
    break;
    case 4:
      problem.innerHTML = prob1 + "+" + prob2 + "x" + "?" + "=" + correct2;
    break;
  }
}

function checkAns(c){
  if(c){
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
    point++;
    lvlup++;
    if(lvlup >= 5){
      if(lvl < 4){
        lvl++;
      }
      lvlup=0;
    }
    score.innerHTML = "score: " + point;
    level.innerHTML = "level " + lvl;
    getQuestion();
  } else {
    feedback.innerHTML = "Fout!";
    feedback.style.color ="red";
    getQuestion();
  }
  return;
}
