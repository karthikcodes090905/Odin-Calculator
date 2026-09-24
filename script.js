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

 const buttons = document.querySelectorAll("button");
 const display = document.querySelector("#display");
 buttons.forEach((button) =>{
 button.addEventListener("click" , (event) =>{
   
      let helper = event.target.textContent ;
         
      if(!isNaN(helper) && operator == ""){
        operand1 += helper ;
      }
      else if(isNaN(helper) && operand2 != ""){
      operand1 = operate(operator , operand1 , operand2); 
      operator = event.target.textContent ; 
      operand2 = "" ;
      }
      else{
         if(operator == ""){
              operator += helper ;
          }
         else{
              operand2 += helper ;
         }
      }
      display.textContent = (operand1 + operator + operand2); 
   });    
 });






