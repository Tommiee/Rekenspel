const problem = document.getElementById('problem');
const input = document.getElementById('input');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const level = document.getElementById('level');

let point = 0;
let lvlup = 0;
let lvl = 0;
let prob1, prob2, correct;

function getQuestion(){
  prob1 = getNumber();
  prob2 = getNumber();
  correct = prob1 * prob2;
  problem.innerHTML = prob1 + "x" + prob2;
  console.log(prob1 + "x" + prob2 + "=" + correct);
}

getQuestion();

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    let inp = input.value;
    if(inp == correct){
      feedback.innerHTML = "Correct!";
      feedback.style.color = "green";
      point++;
      lvlup++;
      if(lvlup >= 10){
        lvl++;
        lvlup=0;
      }
      score.innerHTML = "score: " + point;
      level.innerHTM = "level: " + lvl;
      getQuestion();
    } else {
      feedback.innerHTML = "Fout!";
      feedback.style.color ="red";
      getQuestion();
    }
  }
})

// function getProblem(){
//   let ans = getNumber() + "*" + getNumber();
//   return ans;
// }

function getNumber(){
  return Math.floor(Math.random()*9)+1;
}
