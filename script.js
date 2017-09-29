const problem = document.getElementById('problem');
const input = document.getElementById('input');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const level = document.getElementById('level');

let point = 0;
let lvlup = 0;
let lvl = 1;
let prob1, prob2, correct;

getQuestion();

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    let inp = input.value;
    switch (lvl) {
      case 1:
        if(inp == correct){
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
    }
  }
})

function getNumber(){
  return Math.floor(Math.random()*9)+1;
}

function getQuestion(){
  prob1 = getNumber();
  prob2 = getNumber();
  correct = prob1 * prob2;
  console.log(prob1 + "x" + prob2 + "=" + correct);
  switch (lvl) {
    case 1:
      problem.innerHTML = prob1 + "x" + prob2 + "=" + "?";
    break;
    case 2:
      problem.innerHTML = prob1 + "x" + "?" + "=" + correct;
    break;
  }
}

function checkAns(c){
  if(c){
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
    point++;
    lvlup++;
    console.log(lvlup);
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
