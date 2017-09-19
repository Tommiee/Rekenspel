const problem = document.getElementById('problem');
const input = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let prob1 = getNumber();
let prob2 = getNumber();
let correct = prob1 * prob2;

problem.innerHTML = prob1 + "x" + prob2;

document.addEventListener('keydown',(e)=>{
  console.log(e.keyCode);
  if(e.keyCode == 13){
    let inp = input.value;
    if(inp == correct){
      feedback.innerHTML = "Correct!";
    } else {
      feedback.innerHTML = "Fout!";
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

console.log(prob1 + "x" + prob2 + "=" + correct);
