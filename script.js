let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".display");

prevexp = "";

function update(exp) {
  if (exp == "C") {
    prevexp = 0;
  }else if(exp == "Del"){
    prevexp = prevexp.slice(0,prevexp.length-1)
    if(prevexp == ""){
      prevexp = 0
    }
  }
  else if (exp != "=") {
    prevexp += exp;
  } else {
    cal();
  }
  console.log(prevexp);
  display.textContent = prevexp;
}

function clear() {
  prevexp = "";
}

function cal() {
  try{
    ans = eval(prevexp);
  }catch{
    ans = "Invalid Syntax"
  }
  console.log(ans);
  prevexp = "";
  update(ans);
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    console.log(numbers[i].textContent, "is clicked");
    update(numbers[i].textContent);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    console.log(operators[i].textContent, "is clicked");
    update(operators[i].textContent);
  });
}