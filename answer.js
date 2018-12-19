// *** YOUR ANSWER BELOW ***

const PHI = (1 + Math.sqrt(5)) / 2;

function fibonacci(n){
  return Math.round((1 / Math.sqrt(5)) * Math.pow(PHI, (n + 1)));
}
