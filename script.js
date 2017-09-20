const problem = document.getElementById('problem');
const input = document.getElementById('input');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');

let point = 0;
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
      point++;
      score.innerHTML = point;
      getQuestion();
    } else {
      feedback.innerHTML = "Fout!";
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
