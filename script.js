console.log(getProblem());

const problem = document.getElementById('problem');

problem.innerHTML = getProblem();

function getProblem(){
  let ans = getNumber() + "*" + getNumber();
  return ans;
}

function getNumber(){
  return Math.floor(Math.random()*9)+1;
}
