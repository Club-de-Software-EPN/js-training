const result = document.getElementById('result');

function setResult(value) {
  result.innerHTML = value;
}

function getResult() {
  return result.innerHTML;
}

//key is a number or a symbol
function add(key){
  const result = getResult();
  if(result !== '0' || isNaN(key)) {
    //If is a symbol
    setResult(result + key);
  } else {
    //If is a number
    setResult(key);
  }
}

function calc() {
  const result = eval(getResult());
  setResult(result)
}

function del() {
  setResult(0);
}
