function add(a,b){
return a+b ;
}

function subtract(a,b){
return a-b ;
}

function multiply(a,b){
return a*b ;
}

function divide(a,b){
return a/b ;
}


let operand1 = "" ;
let operator = "" ;
let operand2 = "" ;

function operate(operator , operand1 , operand2){
    if(operator == "+") return add(operand1 , operand2);
    else if(operator =="-") return subtract(operand1 , operand2);
    else if(operator == "*") return multiply(operand1 , operand2);
    else return divide(operand1 , operand2);
    }

 // console.log(operate("+",1,2));

 const buttons = document.querySelectorAll("button");
 const display = document.querySelector("#display");
 buttons.forEach((button) =>{
 button.addEventListener("click" , (event) =>{
     operand1 += event.target.textContent ;
     console.log(operand1);
     display.textContent = operand1 ; 
 });
}) ;





